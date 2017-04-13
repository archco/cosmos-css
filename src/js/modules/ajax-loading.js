import CosmosModule from '../lib/cosmos-module.js';

/************************************************************
  AJAX-loading
*************************************************************/
const NAME = 'Cosmos.Ajax-loading';
const Config = {
  SELECTOR: '#ajax-loading',
  SHOW: 'show',
  LOADER_TAG: 'div',
  LOADER_CLASS: 'loader'
};

class AjaxLoading extends CosmosModule{

  // static
  
  static get name() {
    return NAME;
  }

  // public
  
  init() {
    var a = document.querySelector(Config.SELECTOR);
    if (!a) { return; }
    
    this._appendLoader(a); // append loader element.
    // Register callback to jquery ajax.
    $(document)
      .ajaxStart(function () {
        if (! a.classList.contains(Config.SHOW)) {
          a.classList.add(Config.SHOW);
        }
      })
      .ajaxStop(function () {
        if (a.classList.contains(Config.SHOW)) {
          a.classList.remove(Config.SHOW);
        }
      });
  }

  // private
  
  /**
   * append div.loader into element
   * @param  {element} a
   * @return {void}
   */
  _appendLoader(a) {
    let loader = document.createElement(Config.LOADER_TAG);
    loader.classList.add(Config.LOADER_CLASS);
    a.appendChild(loader);
  }
}

export default AjaxLoading;
