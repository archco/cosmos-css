import Util from '../lib/util.js';

/************************************************************
  Scaffolding
*************************************************************/
const Scaffolding = (() => {
  const NAME = 'Cosmos.Scaffolding';

  class Scaffolding {

    // static
    static get name() {
      return NAME;
    }

    static load() {
      let s = new Scaffolding;
      s.init();
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
