'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _button = require('./button.js');

var _button2 = _interopRequireDefault(_button);

var _elementUtil = require('../lib/element-util.js');

var _elementUtil2 = _interopRequireDefault(_elementUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Modal
*************************************************************/
var NAME = 'Modal';
var ClassName = {
  MODAL: 'modal',
  CONTENT: 'modal-content',
  HEADER: 'modal-header',
  BODY: 'modal-body',
  FOOTER: 'modal-footer',
  CLOSE: 'btn-close',
  SHOW: 'show'
};
var Selector = {
  MODAL: '.' + ClassName.MODAL,
  TRIGGER: '[data-trigger="modal"]',
  TRIGGER_CLOSE: '[data-trigger="modal-close"]',
  CLOSE: '.' + ClassName.MODAL + ' .' + ClassName.CLOSE,
  CONTENT: '.' + ClassName.CONTENT,
  HEADER: '.' + ClassName.HEADER
};
var ButtonOption = {
  close_style: 'icon'
};
var Default = {
  trigger: '',
  target: '',
  default_title: 'Modal Dialog',
  enable_outside_close: true // If true, modal close when click outside of modal-content.
};

var Modal = function (_CosmosModule) {
  _inherits(Modal, _CosmosModule);

  function Modal() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, option));

    _this.button = new _button2.default(ButtonOption);
    _this.setTrigger(_this.option.trigger);
    _this.setTarget(_this.option.target);
    return _this;
  }

  // static

  _createClass(Modal, [{
    key: 'getDefaultOption',


    // public

    value: function getDefaultOption() {
      return Default;
    }
  }, {
    key: 'init',
    value: function init() {
      // modal trigger button.
      _elementUtil2.default.addListener(Selector.TRIGGER, 'click', this._triggerHandler.bind(this));

      // modal close button.
      _elementUtil2.default.addListener(Selector.CLOSE + ',' + Selector.TRIGGER_CLOSE, 'click', this._closeHandler.bind(this), true);

      if (this.option.enable_outside_close) {
        window.addEventListener('click', this._modalOutsideClickHandler.bind(this));
      }

      // If modal-header does not have close button, add it.
      var modals = document.querySelectorAll(Selector.MODAL);
      if (modals.length) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = modals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var modal = _step.value;

            this._addCloseBtn(modal);
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
    key: 'makeDialog',
    value: function makeDialog(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var modal = document.createElement('DIV');
      var content = document.createElement('DIV');
      var header = document.createElement('DIV');
      var h3 = document.createElement('H3');
      var body = document.createElement('DIV');

      // set elements.
      modal.classList.add(ClassName.MODAL);
      content.classList.add(ClassName.CONTENT);
      header.classList.add(ClassName.HEADER);
      h3.textContent = title || this.option.default_title;
      body.classList.add(ClassName.BODY);
      body.textContent = text;

      // assemble.
      header.appendChild(h3);
      content.appendChild(header);
      content.appendChild(body);
      modal.appendChild(content);
      this._addCloseBtn(modal);
      document.body.appendChild(modal);

      // show
      this._modalShow(modal);
    }
  }, {
    key: 'setTrigger',
    value: function setTrigger(selector) {
      if (!selector) return;
      this.trigger = _elementUtil2.default.getElement(selector);
      this.target = this._getTargetFromTrigger(this.trigger);
      return this;
    }
  }, {
    key: 'setTarget',
    value: function setTarget(selector) {
      if (!selector) return;
      this.target = _elementUtil2.default.getElement(selector);
      return this;
    }
  }, {
    key: 'show',
    value: function show() {
      this._modalShow(this.target);
    }
  }, {
    key: 'hide',
    value: function hide() {
      this._modalHide(this.target);
    }
  }, {
    key: 'toggle',
    value: function toggle() {
      if (this._isShown(this.target)) {
        this.hide();
      } else {
        this.show();
      }
    }

    // private

  }, {
    key: '_closeHandler',
    value: function _closeHandler(event) {
      var modal = _elementUtil2.default.findAncestor(event.currentTarget, Selector.MODAL);
      this._modalHide(modal);
      event.stopPropagation();
    }
  }, {
    key: '_triggerHandler',
    value: function _triggerHandler(event) {
      var target = this._getTargetFromTrigger(event.currentTarget);
      if (!target) {
        return;
      }

      this._modalShow(target);
    }
  }, {
    key: '_modalShow',
    value: function _modalShow(modal) {
      modal.classList.add(ClassName.SHOW);
    }
  }, {
    key: '_modalHide',
    value: function _modalHide(modal) {
      modal.classList.remove(ClassName.SHOW);
    }
  }, {
    key: '_isShown',
    value: function _isShown(modal) {
      return modal.classList.contains(ClassName.SHOW);
    }
  }, {
    key: '_addCloseBtn',
    value: function _addCloseBtn(modal) {
      var header = modal.querySelector(Selector.HEADER);
      var close = modal.querySelector(Selector.CLOSE);

      if (!header || close) return;
      this.button.appendBtnClose(header, this._closeHandler.bind(this));
    }
  }, {
    key: '_getTargetFromTrigger',
    value: function _getTargetFromTrigger(trigger) {
      var selector = trigger.getAttribute('href') || trigger.dataset.target || '';
      if (!selector) return;
      return _elementUtil2.default.getElement(selector);
    }
  }, {
    key: '_modalOutsideClickHandler',
    value: function _modalOutsideClickHandler(event) {
      if (event.target.classList.contains(ClassName.MODAL)) {
        this._modalHide(event.target);
      }
    }
  }], [{
    key: 'dialog',
    value: function dialog(text) {
      var title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

      var modal = new Modal();
      modal.makeDialog(text, title);
    }
  }, {
    key: 'name',
    get: function get() {
      return NAME;
    }
  }, {
    key: 'isLoadable',
    get: function get() {
      return true;
    }
  }]);

  return Modal;
}(_cosmosModule2.default);

exports.default = Modal;