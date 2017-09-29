## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: comparer, @tag: component-partial }}
{{#with comparer-bp.variations.default}}
   {{> c-comparer}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams V5
``` js
// @INSERT :: START @tag: js-init-v5 //
 	,
 	// Init Comparer
 	{
 		namespace: 'comparer',
 		module: Comparer
 	}
// @INSERT :: END //
```