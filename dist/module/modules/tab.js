'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = require('../lib/util.js');

var _util2 = _interopRequireDefault(_util);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Tab
*************************************************************/
var NAME = 'Cosmos.Tab';
var ClassName = {
  TAB: 'tab',
  LINK: 'tab-link',
  CONTENT: 'tab-content',
  SHOW: 'show',
  ACTIVE: 'active',
  FADE: 'fade',
  EFFECT_FADE: 'tab-fade-effect'
};
var Selector = {
  TAB: '.' + ClassName.TAB,
  LINK: '.' + ClassName.LINK,
  CONTENT: '.' + ClassName.CONTENT
};

var Tab = function (_CosmosModule) {
  _inherits(Tab, _CosmosModule);

  function Tab() {
    _classCallCheck(this, Tab);

    return _possibleConstructorReturn(this, (Tab.__proto__ || Object.getPrototypeOf(Tab)).apply(this, arguments));
  }

  _createClass(Tab, [{
    key: 'init',


    // public

    value: function init() {
      // add event handler on links.
      _util2.default.eventOnSelector(Selector.LINK, 'click', this._tabHandle.bind(this));

      // initialize tabs.
      var tabs = this._getTabs();
      if (tabs.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = tabs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var t = _step.value;

            this._loadTab(t);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: 'setDefault',
    value: function setDefault(linkIndex) {
      var _this2 = this;

      var tabIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

      if (tabIndex == null) {
        // all tabs.
        var tabs = this._getTabs();
        tabs.forEach(function (e, i, a) {
          _this2._default(linkIndex, i);
        });
      } else {
        this._default(linkIndex, tabIndex);
      }
    }

    // private

  }, {
    key: '_tabHandle',
    value: function _tabHandle(event) {
      var a = event.currentTarget;
      var tab = _util2.default.findAncestor(a, Selector.TAB);
      var links = tab.querySelectorAll(Selector.LINK);
      var content = this._getContent(a);

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var l = _step2.value;

          // content hide
          var c = this._getContent(l);
          c.classList.remove(ClassName.SHOW);
          // remove link.active
          l.classList.remove(ClassName.ACTIVE);
        }
        // active and show content.
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      a.classList.add(ClassName.ACTIVE);
      content.classList.add(ClassName.SHOW);
      event.preventDefault();
    }
  }, {
    key: '_extractID',
    value: function _extractID(str) {
      var result = /([#])\S+/.exec(str);

      return result == null ? null : result[0];
    }
  }, {
    key: '_getContent',
    value: function _getContent(link) {
      var c = document.querySelector(this._extractID(link.href));
      if (c && !c.classList.contains(ClassName.CONTENT)) {
        c.classList.add(ClassName.CONTENT);
      }
      return c;
    }
  }, {
    key: '_getTabs',
    value: function _getTabs() {
      return document.querySelectorAll(Selector.TAB);
    }
  }, {
    key: '_loadTab',
    value: function _loadTab(tab) {
      var links = tab.querySelectorAll(Selector.LINK);
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = links[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var l = _step3.value;

          // set default.
          if (l.classList.contains(ClassName.ACTIVE)) {
            l.click();
          }
          // tab fade effect.
          if (tab.classList.contains(ClassName.FADE)) {
            this._getContent(l).classList.add(ClassName.EFFECT_FADE);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  }, {
    key: '_default',
    value: function _default(linkIndex, tabIndex) {
      var tab = this._getTabs()[tabIndex];
      var link = tab.querySelectorAll(Selector.LINK)[linkIndex];
      link.click();
    }
  }], [{
    key: 'name',


    // static

    get: function get() {
      return NAME;
    }
  }]);

  return Tab;
}(_cosmosModule2.default);

exports.default = Tab;