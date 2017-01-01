import Util from '../lib/util.js';

/************************************************************
  Scaffolding
*************************************************************/
const Scaffolding = (() => {
  const NAME = 'Cosmos.Scaffolding';

  var load = function () {
    // wrap table.responsive
    Util.wrap('table.responsive', 'table-responsive-wrapper');
  };

  return {
    name: NAME,
    load: load
  };
})();

export default Scaffolding;
