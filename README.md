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
- settings.comparerContextClass {`String`} [default] - _Context class of component._
- settings.comparerClasses {`String`} - _Modifier classes for component._
- settings.jsOptions {`Object`} - _JavaScript options which gets stringified._

-------------

## JavaScript Options

The module gives you the possibility to override default options: 

- handle {`String`} ['[data-js-item="comparer-handle"]'] - _Define the handler element._
- topContainer {`String`} ['[data-js-item="comparer-top-container"]'] - _Define the element for top container._
- topContent {`String`} ['[data-js-item="comparer-top-content"]'] - _Define the content element in top container._
- draggClass {`String`} ['is-dragging'] - _Define the dragging class._
- dragMode {`Boolean`} [true] - _Enable or disable drag mode._
- topContentRight {`Boolean`} [false] - _Reverse the drag mode direction._
- disabled {`Object`} [ 'desktop': false, 'tablet-large': false, 'tablet-small': false, 'mobile-large': false, 'mobile-medium': false, 'mobile-small': false ] - _Define on which viewport the module is enabled._

------------

## Sass Options

There are multiple global variables which you can change: 
- $comparer-color-light [`#fff`] - _Handle color._