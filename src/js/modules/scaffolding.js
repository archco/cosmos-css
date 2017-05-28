import CosmosModule from '../lib/cosmos-module.js';
import ElementUtil from '../lib/element-util.js';

/************************************************************
  Scaffolding
*************************************************************/
const NAME = 'scaffolding';

class Scaffolding extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  // public

  init() {
    // wrap table.responsive
    ElementUtil.wrap('table.responsive', 'table-responsive-wrapper');
  }
}

export default Scaffolding;
