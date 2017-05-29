'use strict';

var _cosmos = require('./cosmos.js');

var _cosmos2 = _interopRequireDefault(_cosmos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var option = {
  sub_modules: {
    button: {
      close_style: 'icon'
    },
    toast: {
      log_enable: false
    },
    scroll_to: {
      scroll_duration: 3000
    }
  }
};

window.Cosmos = _cosmos2.default;
var cosmos = new _cosmos2.default(option);
window.cosmos = cosmos.init();