'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _cosmosModule = require('../lib/cosmos-module.js');

var _cosmosModule2 = _interopRequireDefault(_cosmosModule);

var _util = require('../lib/util.js');

var _util2 = _interopRequireDefault(_util);

var _button = require('./button.js');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/************************************************************
  Modal
*************************************************************/
var Modal = function () {
  var NAME = 'Cosmos.Modal';
  var ClassName = {
    MODAL: 'modal',
    CONTENT: 'modal-content',
    CLOSE: 'btn-close',
    SHOW: 'show'
  };
  var Selector = {
    MODAL: '.' + ClassName.MODAL,
    OPEN: 'button[data-toggle="modal"]',
    CLOSE: '.' + ClassName.MODAL + ' .' + ClassName.CLOSE,
    CONTENT: '.' + ClassName.CONTENT
  };
  var ButtonOption = {
    close_position: 'corner',
    close_style: 'icon'
  };

  var Modal = function (_CosmosModule) {
    _inherits(Modal, _CosmosModule);

    function Modal() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Modal);

      var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this, option));

      _this.button = new _button2.default(ButtonOption);
      return _this;
    }

    // static

    _createClass(Modal, [{
      key: 'init',


      // public

      value: function init() {
        var _this2 = this;

        // modal open button.
        _util2.default.eventOnSelector(Selector.OPEN, 'click', this._modalOpenHandler.bind(this));

        // modal close button.
        _util2.default.eventOnSelector(Selector.CLOSE, 'click', this._modalCloseHandler.bind(this), true);

        // window onclick.
        window.addEventListener('click', function (event) {
          if (event.target.classList.contains(ClassName.MODAL)) {
            _this2._modalHide(event.target);
          }
        });

        // If modal doesn't have close button, add it.
        var modals = document.querySelectorAll(Selector.MODAL);
        if (modals.length > 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = modals[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var m = _step.value;

              this._addCloseBtn(m);
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
        var m = document.createElement('div'); // modal
        var c = document.createElement('div'); // modal-content
        // modal-content
        c.classList.add(ClassName.CONTENT);
        c.textContent = text;
        // modal
        m.classList.add(ClassName.MODAL);
        m.appendChild(c);
        this._addCloseBtn(m);
        document.body.appendChild(m);
        // show
        this._modalShow(m);
      }

      // private

    }, {
      key: '_modalCloseHandler',
      value: function _modalCloseHandler(event) {
        var m = _util2.default.findAncestor(event.currentTarget, Selector.MODAL);
        this._modalHide(m);
        event.stopPropagation();
      }
    }, {
      key: '_modalOpenHandler',
      value: function _modalOpenHandler(event) {
        var targetID = event.currentTarget.dataset.target;
        var t = document.querySelector(targetID);
        if (!t) {
          return;
        }

        this._modalShow(t);
      }
    }, {
      key: '_modalShow',
      value: function _modalShow(modal) {
        if (!modal.classList.contains(ClassName.SHOW)) {
          modal.classList.add(ClassName.SHOW);
        }
      }
    }, {
      key: '_modalHide',
      value: function _modalHide(modal) {
        if (modal.classList.contains(ClassName.SHOW)) {
          modal.classList.remove(ClassName.SHOW);
        }
      }
    }, {
      key: '_addCloseBtn',
      value: function _addCloseBtn(modal) {
        if (modal.querySelector(Selector.CLOSE)) {
          return;
        }

        var content = modal.querySelector(Selector.CONTENT);
        this.button.appendBtnClose(content, this._modalCloseHandler.bind(this));
      }
    }], [{
      key: 'dialog',
      value: function dialog(text) {
        var m = new Modal();
        m.makeDialog(text);
      }
    }, {
      key: 'name',
      get: function get() {
        return NAME;
      }
    }]);

    return Modal;
  }(_cosmosModule2.default);

  return Modal;
}();

exports.default = Modal;