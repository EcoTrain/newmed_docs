---
sidebar_position: 1
id: scheduler
title: Planning
slug: /presentation/schedule/intro
---

An important element of the system is task scheduling. In this case, the tasks are divided into

- `reminders`,
- `taking medications`,
- `an appointment with a doctor` and
- `keeping diaries`

## Scheduler Interface {#schedule_interface}

Планировщик делится на

- `заголовок` и
- `тело`, разметка которого, в зависимости от ширины экрана, меняется с вертикальной на горизонтальную.

В `теле` содержатся скрываемый блок `календарь` (выбора даты) и блок `расписания на день`. Чтобы раскрыть блок `календарь`, нужно кликнуть по названию месяца в `заголовке`

`Расписание на день` представляет собой некоторого рода дневник, где каждая из 24-х линий отвечает за `час`. Текущее время помечено <span class="primary-color">`primary`</span> цветом и не центрировано по `часу`.

Если на текущий день запланирована какая-либо `задача`, она будет отображена рядом с часом, в который она запланирована. Если у нескольких задач пересекается промежуток выполнения, `задачи` добавляются справа, а поле `Расписание на день` допускает горизонтальный скролл

`Календарь` помечает `pin`-ами те дни, в которые запланирована хотя бы одна задача

The scheduler is divided into

- `title` and
- a `body` whose layout changes from vertical to horizontal depending on the screen's width.

The `body` contains a hidden `calendar` block (date picker) and a `schedule block for the day`. To open the `calendar` block, you need to click on the name of the month in the `header`.

`Schedule for the day` is a list, where each of the lines is responsible for the `hour`.

If a task is scheduled for the current day, it will be displayed next to the hour in which it is scheduled. If several tasks overlap the execution window, tasks are added to the right of the existing ones.

The calendar `pins` the days on which at least one task is scheduled

<div align="center" display="flex">
    <div>
        <img type="imgscreen" src="/wellness_doc/img/presentation/calendar/calendar.png"/>
    </div>
    <div>
        <img type="imgscreen" src="/wellness_doc/img/presentation/calendar/calendarExpanded.png"/>
    </div>
</div>

## Creating events {#schedule_event_add}

To add an `Event`, click on the corresponding button at the bottom of the window.

After clicking, you get to the window for selecting the `type of event`. Currently, only two types are available:

- `Reminder`
- `Taking medication`

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/calendar/eventTypes.png"/></div>

### Event constructors

Depending on the selected event type, the event designer window that is opened next will contain a slightly different set of components, but in most cases, these sets overlap.

<div align="center" display="flex">
    <div>
        <img type="imgscreen" src="/wellness_doc/img/presentation/calendar/addEvent1.png"/>
    </div>
    <div>
        <img type="imgscreen" src="/wellness_doc/img/presentation/calendar/addEvent2.png"/>
    </div>
</div>

### Event Timings

Чтобы выбрать время события, можно воспользоваться 2-мя способами:

- выбор даты
- выбор дней недели

В первом случае, вам необходимо выбрать конкретную дату. Тогда `событие` появится в `календаре` только один раз.

To select the time of the event, you can use two methods:
- date selection
- choice of days of the week

In the first case, you need to select a specific date. Then the `event` will appear in the `calendar` only once.

If you decide to select the days of the week, then the `event` in the `calendar` will appear constantly according to the selected days of the week. If at least one day of the week is selected, then the `date picker` widget will be disabled.

After selecting the days, you can set the time for the `event` to appear in the `schedule for the day`. To do this, you can click on the already added time to delete it on the panel with the clock or on the + button to add a new time.

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/calendar/schedule.png"/></div>