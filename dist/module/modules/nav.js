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
  nav
*************************************************************/
var NAME = 'Cosmos.Nav';
var ClassName = {
  NAVBAR: 'navbar',
  TOGGLE_BTN: 'menu-toggle',
  CHANGE: 'change',
  USE_ACTIVATOR: 'use-activator'
};
var Selector = {
  TOGGLE_BTN: 'nav.' + ClassName.NAVBAR + ' .' + ClassName.TOGGLE_BTN,
  USE_ACTIVATOR: 'nav.' + ClassName.NAVBAR + ' ul.' + ClassName.USE_ACTIVATOR
};
var MenuGroups = ['.menu-float-left', '.menu-float-right', '.menu-left', '.menu-right', '.menu-center', '.menu-between', '.menu-around'];

var Nav = function (_CosmosModule) {
  _inherits(Nav, _CosmosModule);

  function Nav() {
    _classCallCheck(this, Nav);

    return _possibleConstructorReturn(this, (Nav.__proto__ || Object.getPrototypeOf(Nav)).apply(this, arguments));
  }

  _createClass(Nav, [{
    key: 'init',


    // public

    value: function init() {
      _util2.default.eventOnSelector(Selector.TOGGLE_BTN, 'click', this._toggleHandler);

      this.activator(Selector.USE_ACTIVATOR);

      // handle jQuery slide style.
      $(window).resize(function () {
        var w = $(window).width();
        var menu = $("nav ul");
        if (w > 768 && menu.is(':hidden')) {
          menu.removeAttr('style');
        }
      });
    }

    /**
     * activator
     *
     * @param  string selector  menu selector string
     * @return void
     */

  }, {
    key: 'activator',
    value: function activator(selector) {
      var links = document.querySelectorAll(selector + ' a');
      if (links.length === 0) return;

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var a = _step.value;

          if (compareWithLocation(a)) {
            a.parentNode.classList.add('active');
          }
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

      function compareWithLocation(anchor) {
        var l = {
          path: lastTerm(document.location.pathname),
          query: _util2.default.locationSearchToObject()
        };
        var a = {
          path: lastTerm(anchor.pathname),
          query: _util2.default.searchToObject(anchor.search)
        };

        if (anchor.getAttribute('href') == '#') {
          // sample link (e.g. <a href="#">)
          return false;
        }

        if (l.path == a.path) {
          if (!a.query || _util2.default.isContains(l.query, a.query)) return true;
        }

        return false;
      }

      function lastTerm(string) {
        return string.substr(string.lastIndexOf("/"));
      }
    }

    // private

  }, {
    key: '_toggleHandler',
    value: function _toggleHandler(event) {
      var t = event.currentTarget;
      var nav = t.parentNode.parentNode;
      // toggle button class change.
      t.classList.toggle(ClassName.CHANGE);
      // menu slide (use jQuery)
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = MenuGroups[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var m = _step2.value;

          $(nav).find(m).slideToggle();
        }
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
    }
  }], [{
    key: 'name',


    // static

    get: function get() {
      return NAME;
    }
  }]);

  return Nav;
}(_cosmosModule2.default);

exports.default = Nav;