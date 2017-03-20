import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';

/************************************************************
  SipleCRUD
*************************************************************/
const SimpleCRUD = (() => {
  const NAME = 'Cosmos.SimpleCRUD';
  const ClassName = {
    ITEM: 'simple-crud-item',
    VIEW_READ: 'simple-crud-view-read',
    VIEW_UPDATE: 'simple-crud-view-update',
    VIEW_DELETE: 'simple-crud-view-delete',
    BTN_UPDATE: 'simple-crud-update',
    BTN_DELETE: 'simple-crud-delete',
    BTN_CANCEL: 'simple-crud-cancel',
    SHOW: 'show',
  };
  const Selector = {
    ITEM: `.${ClassName.ITEM}`,
    VIEW: '[class*="simple-crud-view-"]',
    VIEW_READ: `.${ClassName.VIEW_READ}`,
    VIEW_UPDATE: `.${ClassName.VIEW_UPDATE}`,
    VIEW_DELETE: `.${ClassName.VIEW_DELETE}`,
    BTN_UPDATE: `button.${ClassName.BTN_UPDATE}`,
    BTN_DELETE: `button.${ClassName.BTN_DELETE}`,
    BTN_CANCEL: `button.${ClassName.BTN_CANCEL}`,
  };

  class SimpleCRUD extends CosmosModule {

    // static
    
    static get name() {
      return NAME;
    }

    // public
     
    init() {
      Util.eventOnSelector(Selector.BTN_UPDATE, 'click', (e) => {
        this._switchView(e.currentTarget, 'update');
      });
      Util.eventOnSelector(Selector.BTN_DELETE, 'click', (e) => {
        this._switchView(e.currentTarget, 'delete');
      });
      Util.eventOnSelector(Selector.BTN_CANCEL, 'click', (e) => {
        this._switchView(e.currentTarget, 'read');
      });
    }

    // private

    _getNodes(element) {
      let item = Util.findAncestor(element, Selector.ITEM);
      let current = Util.findAncestor(element, Selector.VIEW);

      return {
        item: item,
        current: current,
        read: item.querySelector(Selector.VIEW_READ),
        update: item.querySelector(Selector.VIEW_UPDATE),
        delete: item.querySelector(Selector.VIEW_DELETE),
      };
    }

    _switchView(element, name) {
      let nodes = this._getNodes(element);
      // console.log(NAME, 'switchView: ' + name);
      nodes.current.classList.remove(ClassName.SHOW);
      nodes[name].classList.add(ClassName.SHOW);
    }
  }

  return SimpleCRUD;
})();

export default SimpleCRUD;
