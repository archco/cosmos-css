'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Toast = exports.Chip = exports.Button = exports.Helper = exports.Color = exports.ElementUtil = exports.Util = undefined;

var _util = require('./lib/util.js');

var _util2 = _interopRequireDefault(_util);

var _color = require('./lib/color.js');

var _color2 = _interopRequireDefault(_color);

var _helper = require('./lib/helper.js');

var _helper2 = _interopRequireDefault(_helper);

var _elementUtil = require('./lib/element-util.js');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _scaffolding = require('./modules/scaffolding.js');

var _scaffolding2 = _interopRequireDefault(_scaffolding);

var _button = require('./modules/button.js');

var _button2 = _interopRequireDefault(_button);

var _dropdown = require('./modules/dropdown.js');

var _dropdown2 = _interopRequireDefault(_dropdown);

var _message = require('./modules/message.js');

var _message2 = _interopRequireDefault(_message);

var _modal = require('./modules/modal.js');

var _modal2 = _interopRequireDefault(_modal);

var _nav = require('./modules/nav.js');

var _nav2 = _interopRequireDefault(_nav);

var _parallax = require('./modules/parallax.js');

var _parallax2 = _interopRequireDefault(_parallax);

var _scrollTo = require('./modules/scroll-to.js');

var _scrollTo2 = _interopRequireDefault(_scrollTo);

var _tab = require('./modules/tab.js');

var _tab2 = _interopRequireDefault(_tab);

var _collapse = require('./modules/collapse.js');

var _collapse2 = _interopRequireDefault(_collapse);

var _simpleCrud = require('./modules/simple-crud.js');

var _simpleCrud2 = _interopRequireDefault(_simpleCrud);

var _chip = require('./modules/chip.js');

var _chip2 = _interopRequireDefault(_chip);

var _toast = require('./modules/toast.js');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// initialize - loading modules.

// Functional modules. - nonloadable
_scaffolding2.default.load();
// Loadable Modules.
/*!
 * cosmos-css - The css framework for personal practice.
 * @version v0.11.1
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */

// Libraries.

_button2.default.load();
_dropdown2.default.load();
_message2.default.load();
_modal2.default.load();
_nav2.default.load();
_parallax2.default.load();
_scrollTo2.default.load();
_tab2.default.load();
_collapse2.default.load();
_simpleCrud2.default.load();

// define global helper functions.
window.submitConfirm = function (selector) {
  var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

  _elementUtil2.default.submitConfirm(selector, message);
};
window.showToast = function (text) {
  var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var option = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  _toast2.default.makeText(text, duration, option).show();
};
window.checkMobileSize = window.isMobileSize = _util2.default.isMobileSize;
window.showMessage = _message2.default.showMessage;
window.modalDialog = _modal2.default.dialog;

// export
var version = require('../../package.json').version;
var lib = {
  Util: _util2.default,
  Color: _color2.default,
  ElementUtil: _elementUtil2.default
};
var Cosmos = {
  name: 'cosmos-css',
  version: 'v' + version,
  lib: lib,
  Button: _button2.default,
  Chip: _chip2.default,
  Toast: _toast2.default
};

exports.default = Cosmos;
exports.Util = _util2.default;
exports.ElementUtil = _elementUtil2.default;
exports.Color = _color2.default;
exports.Helper = _helper2.default;
exports.Button = _button2.default;
exports.Chip = _chip2.default;
exports.Toast = _toast2.default;