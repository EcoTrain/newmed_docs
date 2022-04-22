---
sidebar_position: 5
id: constructor_diary
title: "Конструктор дневников"
slug: /presentation/history/constructor_diary
---

## Общее {#diary_costructor_general}

При создании дневника необходимо задать следующие параметры:

1. Название дневника
2. Тип графика
3. Цвет иконки
4. Наборы данных
5. Единица измерения

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/diary/diaryConstructor.png"/></div>

## Графики {#diary_costructor_charts}

`Дневники` представляют собой конфигурации, собирающие набор переменных в одном месте, и стилизующие их для удобного представления. Реализованные `типы дневников`:

- [x] Линейные графики
- [x] Прогресс бар (круг)
- [x] Прогресс бар (линия)
- [x] Простое число
- [ ] WaterFall
- [ ] Bar Chart
- [ ] Pie Chart
- [ ] Combine Chart

## Наборы данных {#diary_costructor_datasets}

**Набор данных** представляет список выражений, каждое из которых отражает отношение совокупности [переменных](/docs/presentation/history/constructor_diary).

> Например: баланс жидкости = разность залитой и вылитой жидкости.  
> Эти параметры могут быть отображены в виде:
>
> - двух линий (два выражения по одной переменной в каждом)
> - одной линии, отражающей их разность (одно выражение типа А - В).

Выражения **собираются** из блоков вида `[var][?]`.

- По клику на блок `[var]` открывается диалог со списком переменных.
- По клику на блок `[?]` открывается диалог со список доступных операций.

Справа от выражения находится кнопка **настроек выражения**, где можно задать такие параметры как:

- Цвет элемента на графике
- Включение выражения в статистику по виджету (итоговое значение на панели виджетов)
- Префикс и суфикс при подсчете статистики

**Префикс и суфикс** не влияют на значения лога дневника. Они изменяют лишь визуальную оболочку значения, для более удобного чтения.

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/diary/diaryConstructorWithPrefAndSuf.png"/></div>
Форма создания дневника

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/diary/diaryViewWithPrefAndSuf.png"/></div>
Окно просмотра дневника
  
<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/diary/diaryWidgetWithPrefAndSuf.png"/></div>
Виджет дневника с префиксами и суфиксами

## Переменные {#diary_costructor_variables}

`Переменные` используются для идентификации объектов истории. Переменная содержит в себе имя и пределы. Создание переменных осуществляется через `конструктор переменных`.

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/diary/variableConstructor.png"/></div>