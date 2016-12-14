/************************************************************
  AJAX-loading
*************************************************************/
const AjaxLoading = (() => {
  const NAME = 'Cosmos.Ajax-loading';
  const Config = {
    SELECTOR: '#ajax-loading',
    SHOW: 'show',
    LOADER_TAG: 'div',
    LOADER_CLASS: 'loader'
  };

  // public
  
  var load = () => {
    var a = document.querySelector(Config.SELECTOR);
    if (!a) { return; }
    
    _appendLoader(a); // append loader element.
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
  };

  /**
   * append div.loader into element
   * 
   * @param  {element} a
   * @return {void}
   */
  var _appendLoader = (a) => {
    let loader = document.createElement(Config.LOADER_TAG);
    loader.classList.add(Config.LOADER_CLASS);
    a.appendChild(loader);
  };

  return {
    name: NAME,
    load: load
  };
})();

export default AjaxLoading;
