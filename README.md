# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @avvaikethees/lotide`

**Require it:**

`const _ = require('@avvaikethees/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head(list)`: Returns the first element in an array list 
* `tail(list)`: Removes the first element in an array list and returns the tail in an array
* `middle(array)`: returns the middle element in an odd or even numbered array