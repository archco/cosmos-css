'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _elementUtil = require('../lib/element-util.js');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  SimpleCRUD
*************************************************************/
var NAME = 'SimpleCRUD';
var ClassName = {
  SHOW: 'show'
};
var Selector = {
  ITEM: '.simple-crud-item',
  VIEW: '[class*="simple-crud-view-"]',
  VIEW_READ: '.simple-crud-view-read',
  VIEW_UPDATE: '.simple-crud-view-update',
  VIEW_DELETE: '.simple-crud-view-delete',
  BTN_UPDATE: 'button.simple-crud-update',
  BTN_DELETE: 'button.simple-crud-delete',
  BTN_CANCEL: 'button.simple-crud-cancel'
};

var SimpleCRUD = function (_CosmosModule) {
  _inherits(SimpleCRUD, _CosmosModule);

  function SimpleCRUD() {
    _classCallCheck(this, SimpleCRUD);

    return _possibleConstructorReturn(this, (SimpleCRUD.__proto__ || Object.getPrototypeOf(SimpleCRUD)).apply(this, arguments));
  }

  _createClass(SimpleCRUD, [{
    key: 'init',


    // public

    value: function init() {
      var _this2 = this;

      _elementUtil2.default.addListener(Selector.BTN_UPDATE, 'click', function (e) {
        _this2._switchView(e.currentTarget, 'update');
      });
      _elementUtil2.default.addListener(Selector.BTN_DELETE, 'click', function (e) {
        _this2._switchView(e.currentTarget, 'delete');
      });
      _elementUtil2.default.addListener(Selector.BTN_CANCEL, 'click', function (e) {
        _this2._switchView(e.currentTarget, 'read');
      });
    }

    // private

  }, {
    key: '_getNodes',
    value: function _getNodes(element) {
      var item = _elementUtil2.default.findAncestor(element, Selector.ITEM);
      var current = _elementUtil2.default.findAncestor(element, Selector.VIEW);

      return {
        item: item,
        current: current,
        read: item.querySelector(Selector.VIEW_READ),
        update: item.querySelector(Selector.VIEW_UPDATE),
        delete: item.querySelector(Selector.VIEW_DELETE)
      };
    }
  }, {
    key: '_switchView',
    value: function _switchView(element, name) {
      var nodes = this._getNodes(element);

      // console.log(NAME, 'switchView: ' + name);
      nodes.current.classList.remove(ClassName.SHOW);
      nodes[name].classList.add(ClassName.SHOW);
    }
  }], [{
    key: 'name',


    // static

    get: function get() {
      return NAME;
    }
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return SimpleCRUD;
}(_cosmosModule2.default);

exports.default = SimpleCRUD;