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
    this.subModules = new Map();
    this.subModuleInstances = new Map();
  }

  /**
   * module load
   *
   * @return {CosmosModule}
   */


  _createClass(CosmosModule, [{
    key: "init",


    /**
     * init - abstract method.
     *
     * @return {void}
     */
    value: function init() {} // jscs:ignore disallowEmptyBlocks

    /**
     * setOption
     *
     * @param {Object} option
     * @return {CosmosModule} instance
     */

  }, {
    key: "setOption",
    value: function setOption(option) {
      this.option = Object.assign({}, this.getDefaultOption(), option);
      return this;
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

    /**
     * addSubModules
     *
     * @param {Array} modules
     * @return {CosmosModule}
     */

  }, {
    key: "addSubModules",
    value: function addSubModules(modules) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = modules[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mod = _step.value;

          this.subModules.set(mod.name, mod);
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

      return this;
    }

    /**
     * removeSubModules
     *
     * @param  {Array} modules
     * @return {CosmosModule}
     */

  }, {
    key: "removeSubModules",
    value: function removeSubModules(modules) {
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = modules[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var mod = _step2.value;

          this.subModules.delete(mod.name);
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

      return this;
    }

    /**
     * loadSubModules
     *
     * @return {CosmosModule}
     */

  }, {
    key: "loadSubModules",
    value: function loadSubModules() {
      var _this = this;

      this.subModules.forEach(function (Mod) {
        var instance = new Mod(_this.getSubModuleOption(Mod.name));

        if (Mod.isLoadable) {
          instance.init();
        }

        if (Mod.isFunctional) {
          // TODO: mod's instance name to be camelCase.
          _this[Mod.name] = instance;
        }

        _this.subModuleInstances.set(Mod.name, instance);
      });

      return this;
    }

    /**
     * getSubModuleOption
     *
     * @param  {String} modName
     * @return {Object}
     */

  }, {
    key: "getSubModuleOption",
    value: function getSubModuleOption(modName) {
      var options = this.option.sub_modules;
      if (options && options[modName]) {
        return options[modName];
      } else {
        return {};
      }
    }

    /**
     * setSubModuleOption
     *
     * @param {String} modName
     * @param {Object} option
     * @return {CosmosModule}
     */

  }, {
    key: "setSubModuleOption",
    value: function setSubModuleOption(modName, option) {
      // TODO: option key to be snake_case.
      this.option.sub_modules[modName] = option;
      return this;
    }

    /**
     * getSubModuleInstance
     *
     * @param  {String} modName
     * @return {Object} instance of sub-module.
     */

  }, {
    key: "getSubModuleInstance",
    value: function getSubModuleInstance(modName) {
      return this.subModuleInstances.get(modName);
    }
  }], [{
    key: "load",
    value: function load() {
      var option = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      if (!this.isLoadable) return;
      var instance = new this(option);
      instance.init();
      return instance;
    }

    /**
     * get defaultOption
     *
     * @return {Object}
     */

  }, {
    key: "defaultOption",
    get: function get() {
      var instance = new this();
      return instance.getDefaultOption();
    }

    /**
     * is loadable
     *
     * @return {Boolean}
     */

  }, {
    key: "isLoadable",
    get: function get() {
      return false;
    }
  }, {
    key: "isFunctional",
    get: function get() {
      return false;
    }
  }]);

  return CosmosModule;
}();

exports.default = CosmosModule;