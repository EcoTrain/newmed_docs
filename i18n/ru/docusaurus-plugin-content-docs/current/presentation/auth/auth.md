---
id: auth
title: Авторизация
slug: /presentation/security
---

## Регистрация {#signup}

Для регистрации требуется:

- Имя пользователя (уникальное)
- Почта (уникальное)
- Пароль

После регистрации вам будет отправлено письмо на электронную почту для подтверждения регистрации.

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/auth/signup.png"/></div>

# Вход {#login}

Первый вход в приложение осуществляется через страницу авторизации.

Для авторизации требуется:

- Имя пользователя / Почта
- Пароль

<div align="center"><img type="imgscreen" src="/WM_doc/img/presentation/auth/login.png"/></div>

# Пинкод <span class="pin mobile"></span> {#pincode}

В мобильных версиях после авторизвации требуется добавить пинкод. Далее, при каждом входе в приложение, необходимо вводить созданный ранее код. Если Вы забыли пинкод, вы можете сбросить PIN и зайти заново, нажав на кнопку "Сбросить PIN"

<div align="center">
    <img type="imgscreen" src="/WM_doc/img/presentation/auth/pin/pin_enter.png"/>
    <img type="imgscreen" src="/WM_doc/img/presentation/auth/pin/pin_lock.png"/>
</div>

- Для пользователей iOS возможен вход по PIN коду устройства вместо PIN кода приложения
- Возможно отключение через настройки в следующих релизах

## FaceID/TouchID <span class="pin ios"></span> {#faceid}

Для пользователей iOS доступна разблокировка через TouchID или FaceID вместо ввода PIN кода

# Защита

- Данные пользователя передаются через протокол HTTPS.
- Персональные данные хранятся в базе данных в шифрованном виде