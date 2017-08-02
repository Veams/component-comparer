
### Include: Page

``` hbs
{{! @INSERT :: START @id: comparer, @tag: component-partial }}
{{#with comparer-bp.variations.default}}
   {{> c-comparer}}
{{/with}}
{{! @INSERT :: END }}
```

### Include: SCSS

``` scss
// @INSERT :: START @tag: scss-self-contained-import //
@import "../components/comparer/scss/_c-comparer";
// @INSERT :: END //
```

### Include: JavaScript

#### Import
``` js
/ @INSERT :: START @tag: js-self-contained-import //
import Comparer from '../components/comparer/js/comparer';
// @INSERT :: END //
```

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
