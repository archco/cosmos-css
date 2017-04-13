const fs = require('fs');
const pkg = require('./package.json');
const banner = `/*!
 * ${pkg.name} - ${pkg.description}
 * @version v${pkg.version}
 * @link ${pkg.homepage}
 * @license ${pkg.license}
 */`;
const files = [
  './src/scss/style.scss',
  './src/js/cosmos.js'
];

files.forEach(file => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) throw err;

    let result = data.replace(/\/\*!([\s\S]*?)\*\//, banner);
    fs.writeFile(file, result, 'utf8', (err) => {
      if (err) throw err;
      console.log(`Banner added to "${file}"`);
    });
  });
});
