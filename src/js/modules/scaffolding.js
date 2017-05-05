import CosmosModule from '../lib/cosmos-module.js';
import eu from '../lib/element-util.js';

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
    eu.wrap('table.responsive', 'table-responsive-wrapper');
  }
}

export default Scaffolding;
