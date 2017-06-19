import CosmosModule from '../lib/cosmos-module.js';
import ElementUtil from '../lib/element-util.js';

/************************************************************
  Scaffolding
*************************************************************/
const NAME = 'Scaffolding';

export default class Scaffolding extends CosmosModule {

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  init() {
    // wrap table.responsive
    ElementUtil.wrap('table.responsive', 'table-responsive-wrapper');
  }
}
