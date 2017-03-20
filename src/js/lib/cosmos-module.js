/************************************************************
  CosmosModule
*************************************************************/
class CosmosModule {
  constructor(option = {}) {
    this.setOption(option);
  }

  /**
   * module load
   * 
   * @return {void}
   */
  static load() {
    let m = new this;
    m.init();
  }

  /**
   * get defaultOption
   * 
   * @return {Object}
   */
  static get defaultOption() {
    let m = new this;
    return m.getDefaultOption();
  }

  /**
   * init - abstract method.
   * 
   * @return {void}
   */
  init() {}

  /**
   * setOption
   * 
   * @param {Object} option
   */
  setOption(option) {
    this.option = Object.assign({}, this.getDefaultOption(), option);
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

export default CosmosModule;
