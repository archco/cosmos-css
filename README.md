# cosmos-css
The css framework for personal practice.

## Installation
### NPM
```shell
$ npm install cosmos-css
```

## Configuration
### SCSS
```scss
// In your style.scss file.
@import 'app-variables'; // Customize variables for application.
@import 'node_modules/cosmos-css/src/scss/cosmos';
...
```

### JS
```javascript
// In your script.js (webpack entry file)
import Cosmos from 'cosmos-css';

window.Cosmos = Cosmos;
const cosmos = Cosmos.load({ /* options */ });
// --- or ---
window.Cosmos = Cosmos;
const cosmos = new Cosmos({ /* options */ }).init();
```

### HTML
In your index.html file
```html
<!-- in <head> tag -->
<link rel="stylesheet" href="dist/css/style.css">
...

<!-- in the end of <body> tag -->
<script src="https://cdn.polyfill.io/v2/polyfill.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.23.0/polyfill.js"></script>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
<script src="dist/js/script.js"></script>
```

## Usage
### CSS Components and JS Modules
See [wiki](https://github.com/archco/cosmos-css/wiki) page.

### View demo
https://archco.github.io/cosmos-css/

## Change Log
[CHANGELOG.md](https://github.com/archco/cosmos-css/blob/master/CHANGELOG.md)

## License
The [MIT](https://github.com/archco/cosmos-css/blob/master/LICENSE) License.
