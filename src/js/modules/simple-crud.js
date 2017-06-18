import CosmosModule from '../lib/cosmos-module.js';
import eu from '../lib/element-util.js';

/************************************************************
  SimpleCRUD
*************************************************************/
const NAME = 'SimpleCRUD';
const ClassName = {
  SHOW: 'show',
};
const Selector = {
  ITEM: '.simple-crud-item',
  VIEW: '[class*="simple-crud-view-"]',
  VIEW_READ: '.simple-crud-view-read',
  VIEW_UPDATE: '.simple-crud-view-update',
  VIEW_DELETE: '.simple-crud-view-delete',
  BTN_UPDATE: 'button.simple-crud-update',
  BTN_DELETE: 'button.simple-crud-delete',
  BTN_CANCEL: 'button.simple-crud-cancel',
};

export default class SimpleCRUD extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  // public

  init() {
    eu.addListener(Selector.BTN_UPDATE, 'click', (e) => {
      this._switchView(e.currentTarget, 'update');
    });
    eu.addListener(Selector.BTN_DELETE, 'click', (e) => {
      this._switchView(e.currentTarget, 'delete');
    });
    eu.addListener(Selector.BTN_CANCEL, 'click', (e) => {
      this._switchView(e.currentTarget, 'read');
    });
  }

  // private

  _getNodes(element) {
    let item = eu.findAncestor(element, Selector.ITEM);
    let current = eu.findAncestor(element, Selector.VIEW);

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
