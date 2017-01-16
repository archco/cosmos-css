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
    ACCORDION: 'accordion',
    A_HEAD: 'accordion-head',
    A_BODY: 'accordion-body',
  };
  const Selector = {
    TOGGLE: `.${ClassName.TOGGLE}`,
    ACCORDION: `.${ClassName.ACCORDION}`,
    A_HEAD: `.${ClassName.ACCORDION} .${ClassName.A_HEAD}`,
  };

  class Collapse {

    // public
    // 
    
    init() {
      // toggle event listen
      Util.eventOnSelector(Selector.TOGGLE, 'click', this._toggleHandler.bind(this));
      // accordion head listener
      Util.eventOnSelector(Selector.A_HEAD, 'click', this._headClickHandler.bind(this));
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

      this._collapseToggle(t, p);
    }

    _headClickHandler(event) {
      let h = event.currentTarget;
      let b = h.nextElementSibling;
      let a = Util.findAncestor(h, Selector.ACCORDION);
      
      if (h.classList.contains(ClassName.ACTIVE)) {
        this._collapseToggle(h, b);
      } else {
        this._allClose(a);
        this._collapseToggle(h, b);
      }
    }

    _collapseToggle(head, body) {
      head.classList.toggle(ClassName.ACTIVE);
      this._toggleMaxHeight(body);
    }

    _collapseClose(head, body) {
      head.classList.remove(ClassName.ACTIVE);
      body.style.maxHeight = null;
    }

    _allClose(accordion) {
      let heads = accordion.querySelectorAll(Selector.A_HEAD);
      for (let h of heads) {
        if (h.classList.contains(ClassName.ACTIVE)) {
          let b = h.nextElementSibling;
          this._collapseClose(h, b);  
        }
      }
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
