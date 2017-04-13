"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/************************************************************
  CosmosModule
*************************************************************/
var CosmosModule = function () {
  function CosmosModule() {
    var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, CosmosModule);

    this.setOption(option);
  }

  /**
   * module load
   * 
   * @return {void}
   */


  _createClass(CosmosModule, [{
    key: "init",


    /**
     * init - abstract method.
     * 
     * @return {void}
     */
    value: function init() {}

    /**
     * setOption
     * 
     * @param {Object} option
     */

  }, {
    key: "setOption",
    value: function setOption(option) {
      this.option = Object.assign({}, this.getDefaultOption(), option);
    }

    /**
     * getOption
     * 
     * @return {Object}
     */

  }, {
    key: "getOption",
    value: function getOption() {
      return this.option;
    }

    /**
     * getDefaultOption - abstract method.
     * 
     * @return {Object}
     */

  }, {
    key: "getDefaultOption",
    value: function getDefaultOption() {
      return {};
    }
  }], [{
    key: "load",
    value: function load() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var m = new this(option);
      m.init();
    }

    /**
     * get defaultOption
     * 
     * @return {Object}
     */

  }, {
    key: "defaultOption",
    get: function get() {
      var m = new this();
      return m.getDefaultOption();
    }
  }]);

  return CosmosModule;
}();

exports.default = CosmosModule;