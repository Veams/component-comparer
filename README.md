<p align='right'>
<a href="https://badge.fury.io/js/@veams/component-comparer"><img src="https://badge.fury.io/js/@veams/component-comparer.svg" alt="npm version" height="18"></a>
    <a href='https://gitter.im/Sebastian-Fitzner/Veams?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge'><img src='https://badges.gitter.im/Sebastian-Fitzner/Veams.svg' alt='Gitter Chat' /></a>
</p>

# Comparer

## Description

The component represents a comparison handler.

It allows you to layer two images on top of each another and compare them via a draggable slider.

-----------

## Requirements
- [@veams/core](https://github.com/Veams/core) - Veams Core Framework.
- [@veams/query](https://github.com/Veams/query) or `jquery` - Veams Query or jQuery.
- [@veams/component](https://github.com/Veams/component) - Veams Component.

-----------

## Installation 

### Installation with Veams

``` bash
veams install component comparer
 ```
 ``` bash
veams -i c comparer
 ```
 
----------- 

## Fields

### `comparer.hbs`

#### Settings


| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| settings.comparerContextClass | String | `default` | _Context class of component._ |
| settings.comparerClasses | String | | _Modifier classes for component._ |
| settings.jsOptions | Object | | _JavaScript options which gets stringified._ |

-------------

## JavaScript Options

The module gives you the possibility to override default options: 


| Parameter | Type | Value | Description |
|:--- | :---: |:---: | :--- |
| handle | String | `'[data-js-item="comparer-handle"]` | _Define the handler element._ |
| topContainer | String | `'[data-js-item="comparer-top-container"]` | _Define the element for top container._ |
| topContent | String | `'[data-js-item="comparer-top-content"]` | _Define the content element in top container._ |
| draggClass | String | `'is-dragging` | _Define the dragging class._ |
| dragMode | Boolean | `true` | _Enable or disable drag mode._ |
| topContentRight | Boolean | `false` | _Reverse the drag mode direction._ |
| disabled | Object | `{'mobile-s': false, 'mobile-m': false, 'mobile-l': false, 'tablet-s': false, 'tablet-l': false, 'desktop-s': false, 'desktop-m': false, 'desktop-l': false}` | _Define on which viewport the module is enabled._ |

------------

## Sass Options

There are multiple global variables which you can change: 

| Parameter | Default Value | Description |
|:--- | :---: |:---: |
| $comparer-color-light | `#fff !default` | _Handle color._ |
