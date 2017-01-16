import Util from '../lib/util.js';

/************************************************************
    Collapse
*************************************************************/
const Collapse = (() => {
  const NAME = 'Cosmos.Collapse';
  const ClassName = {
    TOGGLE: 'collapse-toggle',
    PANNEL: 'collapse-panel',
    ACTIVE: 'active',
    SHOW: 'show',
  };
  const Selector = {
    TOGGLE: `.${ClassName.TOGGLE}`,
    PANNEL: `.${ClassName.PANNEL}`,
  };

  class Collapse {

    // public
    // 
    
    init() {
      // toggle event listen
      Util.eventOnSelector(Selector.TOGGLE, 'click', this._toggleHandler.bind(this));
    }
    
    // static
    // 
    
    static get name() {
      return NAME;
    }

    static load() {
      let c = new Collapse();
      c.init();
    }

    // private
    // 
    
    _toggleHandler(event) {
      let t = event.currentTarget;
      let p = document.querySelector(t.dataset.target);

      t.classList.toggle(ClassName.ACTIVE);
      // panel max-height setting for transition.
      this._toggleMaxHeight(p);
    }

    /**
     * _toggleMaxHeight
     * @param  {Element} elm
     * @return {void}
     */
    _toggleMaxHeight(elm) {
      if (elm.style.maxHeight) {
        elm.style.maxHeight = null;
      } else {
        elm.style.maxHeight = elm.scrollHeight + 'px';
      }
    }
  }

  return Collapse;
})();

export default Collapse;
