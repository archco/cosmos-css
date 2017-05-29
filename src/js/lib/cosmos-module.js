/************************************************************
  CosmosModule
*************************************************************/
export default class CosmosModule {
  constructor(option = {}) {
    this.setOption(option);
    this.subModules = new Map();
    this.subModuleInstances = new Map();
  }

  /**
   * module load
   *
   * @return {CosmosModule}
   */
  static load(option = {}) {
    if (!this.isLoadable) return;
    let instance = new this(option);
    instance.init();
    return instance;
  }

  /**
   * get defaultOption
   *
   * @return {Object}
   */
  static get defaultOption() {
    let instance = new this();
    return instance.getDefaultOption();
  }

  /**
   * is loadable
   *
   * @return {Boolean}
   */
  static get isLoadable() {
    return false;
  }

  static get isFunctional() {
    return false;
  }

  /**
   * init - abstract method.
   *
   * @return {void}
   */
  init() {} // jscs:ignore disallowEmptyBlocks

  /**
   * setOption
   *
   * @param {Object} option
   * @return {CosmosModule} instance
   */
  setOption(option) {
    this.option = Object.assign({}, this.getDefaultOption(), option);
    return this;
  }

  /**
   * getOption
   *
   * @return {Object}
   */
  getOption() {
    return this.option;
  }

  /**
   * getDefaultOption - abstract method.
   *
   * @return {Object}
   */
  getDefaultOption() {
    return {};
  }

  /**
   * addSubModules
   *
   * @param {Array} modules
   * @return {CosmosModule}
   */
  addSubModules(modules) {
    for (let mod of modules) {
      this.subModules.set(mod.name, mod);
    }

    return this;
  }

  /**
   * removeSubModules
   *
   * @param  {Array} modules
   * @return {CosmosModule}
   */
  removeSubModules(modules) {
    for (let mod of modules) {
      this.subModules.delete(mod.name);
    }

    return this;
  }

  /**
   * loadSubModules
   *
   * @return {CosmosModule}
   */
  loadSubModules() {
    this.subModules.forEach(Mod => {
      let instance = new Mod(this.getSubModuleOption(Mod.name));

      if (Mod.isLoadable) {
        instance.init();
      }

      if (Mod.isFunctional) {
        // TODO: mod's instance name to be camelCase.
        this[Mod.name] = instance;
      }

      this.subModuleInstances.set(Mod.name, instance);
    });

    return this;
  }

  /**
   * getSubModuleOption
   *
   * @param  {String} modName
   * @return {Object}
   */
  getSubModuleOption(modName) {
    let options = this.option.sub_modules;
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
  setSubModuleOption(modName, option) {
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
  getSubModuleInstance(modName) {
    return this.subModuleInstances.get(modName);
  }
}
