/************************************************************
  CosmosModule
*************************************************************/
export default class CosmosModule {
  constructor(option = {}) {
    this.setOption(option);
  }

  /**
   * module load
   *
   * @return {void}
   */
  static load(option = {}) {
    let m = new this(option);
    m.init();
  }

  /**
   * get defaultOption
   *
   * @return {Object}
   */
  static get defaultOption() {
    let m = new this();
    return m.getDefaultOption();
  }

  /**
   * is loadable
   *
   * @return {Boolean}
   */
  static get isLoadable() {
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
}
