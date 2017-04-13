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
    Collapse
*************************************************************/
var NAME = 'Cosmos.Collapse';
var ClassName = {
  TOGGLE: 'collapse-toggle',
  PANNEL: 'collapse-panel',
  ACTIVE: 'active',
  SHOW: 'show',
  ACCORDION: 'accordion',
  A_HEAD: 'accordion-head',
  A_BODY: 'accordion-body'
};
var Selector = {
  TOGGLE: '.' + ClassName.TOGGLE,
  ACCORDION: '.' + ClassName.ACCORDION,
  A_HEAD: '.' + ClassName.ACCORDION + ' .' + ClassName.A_HEAD,
  C_ACTIVE: '.' + ClassName.TOGGLE + '.' + ClassName.ACTIVE,
  A_ACTIVE: '.' + ClassName.ACCORDION + ' .' + ClassName.A_HEAD + '.' + ClassName.ACTIVE
};

var Collapse = function (_CosmosModule) {
  _inherits(Collapse, _CosmosModule);

  function Collapse() {
    _classCallCheck(this, Collapse);

    return _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).apply(this, arguments));
  }

  _createClass(Collapse, [{
    key: 'init',


    // public

    value: function init() {
      // collapse toggle listener
      _util2.default.eventOnSelector(Selector.TOGGLE, 'click', this._toggleHandler.bind(this));
      // accordion head listener
      _util2.default.eventOnSelector(Selector.A_HEAD, 'click', this._headClickHandler.bind(this));
      // Handle on activated collapse and accordion.
      this._activatedCollapse();
      this._activatedAccordion();
    }

    // private

  }, {
    key: '_toggleHandler',
    value: function _toggleHandler(event) {
      var t = event.currentTarget;
      var p = document.querySelector(t.dataset.target);

      this._collapseToggle(t, p);
    }
  }, {
    key: '_headClickHandler',
    value: function _headClickHandler(event) {
      var h = event.currentTarget;
      var b = h.nextElementSibling;
      var a = _util2.default.findAncestor(h, Selector.ACCORDION);

      if (h.classList.contains(ClassName.ACTIVE)) {
        this._collapseToggle(h, b);
      } else {
        this._allClose(a);
        this._collapseToggle(h, b);
      }
    }
  }, {
    key: '_collapseToggle',
    value: function _collapseToggle(head, body) {
      head.classList.toggle(ClassName.ACTIVE);
      this._toggleMaxHeight(body);
    }
  }, {
    key: '_collapseClose',
    value: function _collapseClose(head, body) {
      head.classList.remove(ClassName.ACTIVE);
      body.style.maxHeight = null;
    }
  }, {
    key: '_allClose',
    value: function _allClose(accordion) {
      var heads = accordion.querySelectorAll(Selector.A_HEAD);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = heads[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var h = _step.value;

          if (h.classList.contains(ClassName.ACTIVE)) {
            var b = h.nextElementSibling;
            this._collapseClose(h, b);
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
    }
  }, {
    key: '_activatedCollapse',
    value: function _activatedCollapse() {
      // Collapse can multiple active.
      var ts = document.querySelectorAll(Selector.C_ACTIVE);
      if (ts.length == 0) {
        return;
      }

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = ts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var t = _step2.value;

          var b = t.nextElementSibling;
          this._toggleMaxHeight(b);
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
  }, {
    key: '_activatedAccordion',
    value: function _activatedAccordion() {
      // Only one accordion can be active at a time. After all, only the last one will be activated.
      var hs = document.querySelectorAll(Selector.A_ACTIVE);
      if (hs.length == 0) {
        return;
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = hs[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var h = _step3.value;

          var a = _util2.default.findAncestor(h, Selector.ACCORDION);
          this._allClose(a);
          h.click();
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

    /**
     * _toggleMaxHeight
     * @param  {Element} elm
     * @return {void}
     */

  }, {
    key: '_toggleMaxHeight',
    value: function _toggleMaxHeight(elm) {
      if (elm.style.maxHeight) {
        elm.style.maxHeight = null;
      } else {
        elm.style.maxHeight = elm.scrollHeight + 'px';
      }
    }
  }], [{
    key: 'name',


    // static

    get: function get() {
      return NAME;
    }
  }]);

  return Collapse;
}(_cosmosModule2.default);

exports.default = Collapse;