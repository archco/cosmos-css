'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Modal = exports.Collapse = exports.Toast = exports.Chip = exports.Button = exports.Color = exports.ElementUtil = exports.Util = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('./lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _uaParserJs = require('ua-parser-js');

var _uaParserJs2 = _interopRequireDefault(_uaParserJs);

var _package = require('../../package.json');

var _package2 = _interopRequireDefault(_package);

var _util = require('./lib/util.js');

var _util2 = _interopRequireDefault(_util);

var _color = require('./lib/color.js');

var _color2 = _interopRequireDefault(_color);

var _elementUtil = require('./lib/element-util.js');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

var _changeCase = require('change-case');

var _changeCase2 = _interopRequireDefault(_changeCase);

var _scaffolding = require('./modules/scaffolding.js');

var _scaffolding2 = _interopRequireDefault(_scaffolding);

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

var _simpleCrud = require('./modules/simple-crud.js');

var _simpleCrud2 = _interopRequireDefault(_simpleCrud);

var _collapse = require('./modules/collapse.js');

var _collapse2 = _interopRequireDefault(_collapse);

var _button = require('./modules/button.js');

var _button2 = _interopRequireDefault(_button);

var _chip = require('./modules/chip.js');

var _chip2 = _interopRequireDefault(_chip);

var _toast = require('./modules/toast.js');

var _toast2 = _interopRequireDefault(_toast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*!
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * cosmos-css - The css framework for personal practice.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @version v0.12.2
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @link https://github.com/archco/cosmos-css#readme
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * @license MIT
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


// Libraries.


// Loadable Modules.


// both of loadable and Functional.


// Functional modules. - nonloadable


var Libraries = {
  Util: _util2.default,
  Color: _color2.default,
  ElementUtil: _elementUtil2.default,
  changeCase: _changeCase2.default,
  uaParser: _uaParserJs2.default
};

var Cosmos = function (_CosmosModule) {
  _inherits(Cosmos, _CosmosModule);

  function Cosmos() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Cosmos);

    var _this = _possibleConstructorReturn(this, (Cosmos.__proto__ || Object.getPrototypeOf(Cosmos)).call(this, option));

    _this.lib = Libraries;
    _this.userAgent = (0, _uaParserJs2.default)(navigator.userAgent);
    return _this;
  }

  _createClass(Cosmos, [{
    key: 'init',
    value: function init() {
      this.addSubModules([_scaffolding2.default, _button2.default, _dropdown2.default, _message2.default, _modal2.default, _nav2.default, _parallax2.default, _scrollTo2.default, _tab2.default, _collapse2.default, _simpleCrud2.default, _chip2.default, _toast2.default]);
      this.loadSubModules();
      this.defineGlobalHelperFunctions();
      return this;
    }
  }, {
    key: 'defineGlobalHelperFunctions',
    value: function defineGlobalHelperFunctions() {
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
    }
  }, {
    key: 'version',
    get: function get() {
      return _package2.default.version;
    }
  }], [{
    key: 'version',
    get: function get() {
      return _package2.default.version;
    }
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }, {
    key: 'isFunctional',
    get: function get() {
      return true;
    }
  }, {
    key: 'lib',
    get: function get() {
      return Libraries;
    }
  }]);

  return Cosmos;
}(_cosmosModule2.default);

// For convenience to access functional modules.


Object.assign(Cosmos, {
  Button: _button2.default,
  Chip: _chip2.default,
  Toast: _toast2.default,
  Collapse: _collapse2.default,
  Modal: _modal2.default
});

// export.
exports.default = Cosmos;
exports.Util = _util2.default;
exports.ElementUtil = _elementUtil2.default;
exports.Color = _color2.default;
exports.Button = _button2.default;
exports.Chip = _chip2.default;
exports.Toast = _toast2.default;
exports.Collapse = _collapse2.default;
exports.Modal = _modal2.default;