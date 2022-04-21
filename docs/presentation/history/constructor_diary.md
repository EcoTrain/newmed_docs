---
sidebar_position: 5
title: 'Diary constructor'
slug: /docs/presentation/history/constructor_diary
---

When creating a diary, you must set the following parameters:
1. Name of the diary
2. Graph type
3. Background color
4. Dataset
5. Unit of measurement
   
**Data set** represents a list of expressions, each of which reflects the relationship of a set of variables.
> For example: liquid balance = difference between filled and poured liquid.
> These options can be displayed as:
> * two lines (two expressions with one variable each)
> * one line reflecting their difference (one expression of type A - B).

Expressions are **assembled** from blocks of the form `[var][?]`.
* Clicking on the `[var]` block opens a dialog with a list of variables.
* Clicking on the `[?]` block opens a dialog with a list of available operations.

To the right of the expression is the **expression settings** button, where you can set such parameters as:
* The color of the element on the chart
* Inclusion of expression in widget statistics
* Prefix and suffix when counting statistics

<div align="center"><img type="imgscreen" src="/wellness_doc/img/presentation/constructors/diary/diaryTiles.png"/></div>