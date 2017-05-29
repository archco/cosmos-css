'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  Helper - will be deprecated.
*************************************************************/
var NAME = 'helper';

var Helper = function () {
  function Helper() {
    _classCallCheck(this, Helper);
  }

  _createClass(Helper, null, [{
    key: 'submitConfirm',


    /**
     * submitConfirm - confirm 을 취소하면 event.preventDefault()
     * instead -> ElementUtil.submitConfirm()
     *
     * @param  {element} form
     * @param  {sting} message
     * @return {void}
     */
    value: function submitConfirm(form) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Are you confirm?';

      if (!form) throw new Error('Form target is not exist.');

      form.addEventListener('submit', function (event) {
        if (!confirm(message)) event.preventDefault();
      });
    }

    /**
     * check mobile size
     * instead -> Util.isMobileSize()
     *
     * @return {boolean}
     */

  }, {
    key: 'checkMobileSize',
    value: function checkMobileSize() {
      if (window.innerWidth < 800) {
        return true;
      } else {
        return false;
      }
    }
  }, {
    key: 'name',


    // static

    get: function get() {
      return NAME;
    }
  }]);

  return Helper;
}();

exports.default = Helper;