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
      log_enable: true,
      container_position: 'middle-right',
      close_type: 'hide'
    },
    scroll_to: {
      scroll_duration: 600
    }
  }
};

window.Cosmos = _cosmos2.default;
window.cosmos = new _cosmos2.default(option).init();