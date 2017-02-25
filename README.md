# cosmos-css
The css framework for personal practice.

## Installation
### NPM
```shell
$ npm install cosmos-css
```

## Configuration
### Sass
In your app.scss
```scss
@import 'app-variables.scss';
@import 'node_modules/cosmos-css/src/scss/style.scss';
...
```
### JS
In your app.js (webpack entry file)
```js
// window.$ = window.jQuery = require('jquery');
window.Cosmos = require('cosmos-css');
...
```
### HTML
In your index.html file
```html
<!-- in <head> tag -->
<link rel="stylesheet" href="dist/css/style.css">
...

<!-- in the end of <body> tag -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script> 
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.16.0/polyfill.min.js"></script>
<script src="dist/js/script.js"></script>
```

## Usage
### CSS Components and JS Modules
See [wiki](https://github.com/archco/cosmos-css/wiki) page.

## License
The [MIT](https://github.com/archco/cosmos-css/blob/master/LICENSE) License.
