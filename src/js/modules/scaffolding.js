import CosmosModule from '../lib/cosmos-module.js';
import ElementUtil from '../lib/element-util.js';

/************************************************************
  Scaffolding
*************************************************************/
const NAME = 'Cosmos.Scaffolding';

class Scaffolding extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  // public

  init() {
    // wrap table.responsive
    ElementUtil.wrap('table.responsive', 'table-responsive-wrapper');
  }
}

export default Scaffolding;
