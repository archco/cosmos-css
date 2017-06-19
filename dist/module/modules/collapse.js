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
  Collapse
*************************************************************/
var NAME = 'Collapse';
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
var Default = {
  element: null,
  target: '',
  is_collapsed: true };

var Collapse = function (_CosmosModule) {
  _inherits(Collapse, _CosmosModule);

  function Collapse() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Collapse);

    var _this = _possibleConstructorReturn(this, (Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call(this, option));

    _this.setElement(_this.option.element);
    return _this;
  }

  // static

  _createClass(Collapse, [{
    key: 'getDefaultOption',


    // public

    value: function getDefaultOption() {
      return Default;
    }
  }, {
    key: 'init',
    value: function init() {
      // collapse toggle listener
      _elementUtil2.default.addListener(Selector.TOGGLE, 'click', this._collapseToggleHandler.bind(this));

      // accordion head listener
      _elementUtil2.default.addListener(Selector.A_HEAD, 'click', this._accordionHeadHandler.bind(this));

      // Handle on activated collapse and accordion.
      this._activatedCollapse();
      this._activatedAccordion();
    }

    /**
     * initialize on this.element.
     *
     * @return {void}
     */

  }, {
    key: 'on',
    value: function on() {
      var _this2 = this;

      _elementUtil2.default.addListener(this.element, 'click', function () {
        _this2._toggle(_this2.element, _this2.target);
      });

      if (this.option.is_collapsed) {
        this.hide();
      } else {
        this.show();
      }
    }

    /**
     * show element's target.
     *
     * @return {void}
     */

  }, {
    key: 'show',
    value: function show() {
      this._show(this.element, this.target);
    }

    /**
     * hide element's target.
     *
     * @return {void}
     */

  }, {
    key: 'hide',
    value: function hide() {
      this._hide(this.element, this.target);
    }

    /**
     * set element property.
     *
     * @param {String|Element} element
     * @return {Collapse}
     */

  }, {
    key: 'setElement',
    value: function setElement(element) {
      this.element = element ? _elementUtil2.default.getElement(element) : element;
      this.target = this.option.target ? _elementUtil2.default.getElement(this.option.target) : this._getTarget(this.element);

      if (this.target && !this.target.classList.contains(ClassName.PANNEL)) {
        this.target.classList.add(ClassName.PANNEL);
      }

      return this;
    }

    // private

  }, {
    key: '_toggle',
    value: function _toggle(element, target) {
      if (element.classList.contains(ClassName.ACTIVE)) {
        this._hide(element, target);
      } else {
        this._show(element, target);
      }
    }
  }, {
    key: '_show',
    value: function _show(element, target) {
      element.classList.add(ClassName.ACTIVE);
      target.style.maxHeight = target.scrollHeight + 'px';
    }
  }, {
    key: '_hide',
    value: function _hide(element, target) {
      element.classList.remove(ClassName.ACTIVE);
      target.style.maxHeight = null;
    }
  }, {
    key: '_collapseToggleHandler',
    value: function _collapseToggleHandler(event) {
      var element = event.currentTarget;
      var target = this._getTarget(element);

      this._toggle(element, target);
    }
  }, {
    key: '_accordionHeadHandler',
    value: function _accordionHeadHandler(event) {
      var head = event.currentTarget;
      var body = head.nextElementSibling;
      var accordion = _elementUtil2.default.findAncestor(head, Selector.ACCORDION);

      if (head.classList.contains(ClassName.ACTIVE)) {
        this._toggle(head, body);
      } else {
        this._allClose(accordion);
        this._toggle(head, body);
      }
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
          var head = _step.value;

          if (head.classList.contains(ClassName.ACTIVE)) {
            var body = head.nextElementSibling;
            this._hide(head, body);
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
      var elements = document.querySelectorAll(Selector.C_ACTIVE);
      if (!elements.length) return;

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var element = _step2.value;

          var target = this._getTarget(element);
          this._show(element, target);
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
      var heads = document.querySelectorAll(Selector.A_ACTIVE);
      if (!heads.length) return;

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = heads[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var head = _step3.value;

          var accordion = _elementUtil2.default.findAncestor(head, Selector.ACCORDION);
          this._allClose(accordion);
          head.click();
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
    key: '_getTarget',
    value: function _getTarget(element) {
      if (!element) return null;
      return _elementUtil2.default.getElement(element.dataset.target);
    }
  }], [{
    key: 'name',
    get: function get() {
      return NAME;
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
  }]);

  return Collapse;
}(_cosmosModule2.default);

exports.default = Collapse;