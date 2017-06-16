import changeCase from 'change-case';

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
      let name = changeCase.pascalCase(mod.name);
      this.subModules.set(name, mod);
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
      let name = changeCase.pascalCase(mod.name);
      this.subModules.delete(name);
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
      let instanceName = changeCase.camelCase(Mod.name); // mod's instance name to be camelCase.

      if (Mod.isLoadable) {
        instance.init();
      }

      if (Mod.isFunctional) {
        this[instanceName] = instance;
      }

      this.subModuleInstances.set(instanceName, instance);
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
    modName = changeCase.snakeCase(modName);

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
    modName = changeCase.snakeCase(modName);
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
    modName = changeCase.camelCase(modName);
    return this.subModuleInstances.get(modName);
  }
}
