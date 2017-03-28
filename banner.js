const fs = require('fs');
const pkg = require('./package.json');
const banner = `/*!\n` +
` * ${pkg.name} - ${pkg.description}\n` +
` * @version v${pkg.version}\n` +
` * @link ${pkg.homepage}\n` +
` * @license ${pkg.license}\n` +
` */`;
const file = './src/scss/style.scss';

fs.readFile(file, 'utf8', (err, data) => {
  if (err) throw err;

  let result = data.replace(/\/\*!([\s\S]*?)\*\//, banner);
  fs.writeFile(file, result, 'utf8', (err) => {
    if (err) throw err;
    console.log(`Banner added to "${file}"`);
  });
});
