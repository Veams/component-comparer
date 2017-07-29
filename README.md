<p align='right'>
    <a href='https://badge.fury.io/bo/veams-component-comparer'><img src='https://badge.fury.io/bo/veams-component-comparer.svg' alt='Bower version' height='20'></a>
    <a href='https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge'><img src='https://badges.gitter.im/Sebastian-Fitzner/Veams.svg' alt='Gitter Chat' /></a>
</p>

# Comparer

## Description

The component represents a comparison handler.

It allows you to change via drag the image.

-----------

## Requirements

- `Veams >= v5.0.0` - Veams Framework.

-----------

## Installation 

### Installation with Veams

`veams install vc comparer`

### Installation with Bower

`bower install veams-component-comparer --save`

----------- 

## Fields

### `c-comparer.hbs`

#### Settings
- settings.accContextClass {`String`} [default] - _Context class of component._
- settings.accClasses {`String`} - _Modifier classes for component._
- settings.accJsOptions {`Object`} - _JavaScript options which gets stringified._

-------------

## JavaScript Options

The module gives you the possibility to override default options: 

- handle {`String`} ['[data-js-item="comparer-handle"]'] - _Define the handler element._
- topContainer {`String`} ['[data-js-item="comparer-top-container"]'] - _Define the element for top container._
- topContent {`String`} ['[data-js-item="comparer-top-content"]'] - _Define the content element in top container._
- draggClass {`String`} ['is-dragging'] - _Define the dragging class._
- dragMode {`Boolean`} [true] - _Enable or disable drag mode._
- topContentRight {`Boolean`} [false] - _Reverse the drag mode direction._
- disabled {`Object`} [ {'desktop': false, 'tablet-l': false, 'tablet-p': false, 'mobile-l': false, 'mobile-p': false, 'mobile-s': false} ] - _Define on which viewport the module is enabled._


------------

## Sass Options

There are multiple global variables which you can change: 
- $accordion-toggle-duration [`300ms !default`] - _Speed of toggling._
- $accordion-transition-method [`ease !default`] - _Transition method of toggle effect._
- $accordion-icon-color [`#666 !default`] - _+ icon color._
- $accordion-icon-width [`30px !default`] - _+ icon width._
- $accordion-icon-height [`2px !default`] - _+ icon height._
- $accordion-btn-color `[$accordion-icon-color !default`] - _Accordion button color._
- $accordion-btn-bg-color [`rgba(255, 255, 255, 0.5) !default`] - _Background color of the accordion button._
- $accordion-padding [`1rem !default`] - _Default padding which will be used in the accordion._
