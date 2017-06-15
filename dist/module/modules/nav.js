'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = require('../lib/util.js');

var _util2 = _interopRequireDefault(_util);

var _elementUtil = require('../lib/element-util.js');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  nav
*************************************************************/
var NAME = 'nav';
var ClassName = {
  CHANGE: 'change',
  HIDE: 'display-hide'
};
var Selector = {
  NAVBAR: '.navbar',
  NAVBAR_BODY: '.navbar .navbar-body',
  NAVBAR_TOGGLE: '.navbar-toggle',
  USE_ACTIVATOR: '.use-activator',
  NAV_LINK: '.nav-link'
};

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
      var btns = _elementUtil2.default.getElements(Selector.NAVBAR_TOGGLE);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = btns[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var btn = _step.value;

          this._convertNavbarToggle(btn);
          btn.addEventListener('click', this._toggleHandler);
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

      this.activator(Selector.USE_ACTIVATOR);

      window.addEventListener('resize', this._bodyInitialize.bind(this));
      this._bodyInitialize();
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
      if (!links.length) return;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = links[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var a = _step2.value;

          if (compareWithLocation(a)) {
            a.parentNode.classList.add('active');
          }
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
        return string.substr(string.lastIndexOf('/'));
      }
    }

    // private

  }, {
    key: '_toggleHandler',
    value: function _toggleHandler(event) {
      var btn = event.currentTarget;
      var navbar = _elementUtil2.default.findAncestor(btn, Selector.NAVBAR);
      var body = navbar.querySelector(Selector.NAVBAR_BODY);
      var isBodyHide = body.classList.contains(ClassName.HIDE);

      if (isBodyHide) {
        btn.classList.add(ClassName.CHANGE);
        body.classList.remove(ClassName.HIDE);
      } else {
        btn.classList.remove(ClassName.CHANGE);
        body.classList.add(ClassName.HIDE);
      }
    }
  }, {
    key: '_showBody',
    value: function _showBody(navbar) {
      var body = navbar.querySelector(Selector.NAVBAR_BODY);
      var btn = navbar.querySelector(Selector.NAVBAR_TOGGLE);

      btn.classList.add(ClassName.CHANGE);
      body.classList.remove(ClassName.HIDE);
    }
  }, {
    key: '_hideBody',
    value: function _hideBody(navbar) {
      var body = navbar.querySelector(Selector.NAVBAR_BODY);
      var btn = navbar.querySelector(Selector.NAVBAR_TOGGLE);

      btn.classList.remove(ClassName.CHANGE);
      body.classList.add(ClassName.HIDE);
    }
  }, {
    key: '_toggleBody',
    value: function _toggleBody(navbar) {
      var isHide = this._isHide(navbar);

      if (isHide) {
        this._showBody(navbar);
      } else {
        this._hideBody(navbar);
      }
    }
  }, {
    key: '_isHide',
    value: function _isHide(navbar) {
      var body = navbar.querySelector(Selector.NAVBAR_BODY);
      return body.classList.contains(ClassName.HIDE);
    }
  }, {
    key: '_convertNavbarToggle',
    value: function _convertNavbarToggle(btn) {
      var navbar = _elementUtil2.default.findAncestor(btn, Selector.NAVBAR);
      var navLink = navbar.querySelector(Selector.NAV_LINK);
      var style = window.getComputedStyle(navLink);
      var bar1 = document.createElement('DIV');
      var bar2 = document.createElement('DIV');
      var bar3 = document.createElement('DIV');
      var span = document.createElement('SPAN');

      [bar1, bar2, bar3].forEach(function (elm, i) {
        elm.classList.add('icon-bar' + (i + 1));
        elm.style.backgroundColor = style.color;
      });
      span.textContent = btn.textContent;
      span.classList.add(ClassName.HIDE);
      btn.innerHTML = '';
      [span, bar1, bar2, bar3].forEach(function (elm) {
        return btn.appendChild(elm);
      });
      return btn;
    }
  }, {
    key: '_bodyInitialize',
    value: function _bodyInitialize() {
      var navbars = document.querySelectorAll(Selector.NAVBAR);
      var isMobileSize = _util2.default.isMobileSize(768);

      if (!navbars.length) return;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = navbars[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var navbar = _step3.value;

          if (!navbar.querySelector(Selector.NAVBAR_BODY)) continue; // temporary.
          var isHide = this._isHide(navbar);

          if (isMobileSize && !isHide) this._hideBody(navbar);
          if (!isMobileSize && isHide) this._showBody(navbar);
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

  return Nav;
}(_cosmosModule2.default);

exports.default = Nav;