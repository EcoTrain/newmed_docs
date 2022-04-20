---
sidebar_position: 2
sidebar_label: Архитектура
slug: /presentation/architecture
---

# Архитектура

## Стек

- База данных: MongoDB
- Сервер: NodeJS
- Клиент: ReactNative

## Архитектура

Приложение является кроссплатформенным и доступно на платформах: Web, iOS, Android

Приложение имеет 2 режима верстки:

- Узкая (телефон)
- Широкая (веб, планшет)  
  Обе разметки также можно применять на всех устройствах.

Приложение основано на едином коде для всех платформ за редким исключением, когда:

- Библиотека не адаптирована под все платформы (используются несколько)
- Особенности восприятия интерфейса требуют реализовать разный функционал/вид для разных платформ

## Локальное хранилище

Сервер использует общую БД MongoDB, но мобильные устройства используют **дополнительную локальную** MongoDB.

Это позволяет решить следующие задачи:

### Актуальность данных

Благодаря синхронизации присходит обмен только актуальной информацеий.

При общении с сервером приложение отправляет следуюшие данные:

- Чтение
  - url (путь до области нужных данных в БД)
  - devicetime (время устройства на момент отправки запроса к серверу)
- Запись
  - url (путь до области нужных данных в БД)
  - data (данные для записи)
  - time (время считывания данных на устройстве)
  - devicetime (время устройства на момент отправки запроса к серверу)

Как сервер понимает, что информация актуальна, описано в разделе **механизм синхронизации** этой главы

### Оффлайн

Локальная БД на устройствах позволяет вести непрерывное заполнение журналов даже без доступа к сети благодаря **механизму синхронизации**

### Механизм синхронизации

При действии с БД данные отправляются на сервер (при наличии сети), иначе транзакция добавляется в очередь синхронизации
При получении запроса сервер сравнивает последнее время изменения данных в БД и время, указанное в данных запроса.

Данные считаются актуальными, если:  
**Чтение:** если время на запроса меньше последнего времени изменения данных в БД.  
**Запись:** если время на момент записи данных меньше последнего времени изменения данных в БД. Это значит, что уже записаны более новые данные.
В случае актуальности данных, сервер перезаписывает их в БД и возвращает актуальное время на момент записи в БД. (Actual time = req.devicetime - servertime + req.time)

После выгрузки всех данных из очереди на сервер запрашиваются актуальные данные из БД сервера.