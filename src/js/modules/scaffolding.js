import Util from '../lib/util.js';
import CosmosModule from '../lib/cosmos-module.js';

/************************************************************
  Scaffolding
*************************************************************/
const Scaffolding = (() => {
  const NAME = 'Cosmos.Scaffolding';

  class Scaffolding extends CosmosModule {
    
    // static
    
    static get name() {
      return NAME;
    }

    // public
    
    init() {
      // wrap table.responsive
      Util.wrap('table.responsive', 'table-responsive-wrapper');
    }
  }

  return Scaffolding;
})();

export default Scaffolding;
