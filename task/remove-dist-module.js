const fs = require('fs-extra');
const path = require('path');

const distPath = path.resolve(__dirname, '../dist/module/');

// remove all files from dist/module/
fs.remove(distPath, err => {
  if (err) throw err;

  console.log('Removed: ' + distPath);
});
