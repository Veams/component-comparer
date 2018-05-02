## Usage

### Include: Page

``` hbs
{{! @INSERT :: START @id: comparer, @tag: component-partial }}
{{#with comparer.variations.default}}
   {{> comparer}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: JavaScript

#### Initializing in Veams (@veams/plugin-modules v1.x)
``` js
// @INSERT :: START @tag: js-init-@1 //
	// Init Comparer
	Veams.modules.add({ namespace: 'comparer', module: Comparer });
// @INSERT :: END //
```
