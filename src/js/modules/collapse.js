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
    C_ACTIVE: `.${ClassName.TOGGLE}.${ClassName.ACTIVE}`,
    A_ACTIVE: `.${ClassName.ACCORDION} .${ClassName.A_HEAD}.${ClassName.ACTIVE}`,
  };

  class Collapse {

    // public
    // 
    
    init() {
      // collapse toggle listener
      Util.eventOnSelector(Selector.TOGGLE, 'click', this._toggleHandler.bind(this));
      // accordion head listener
      Util.eventOnSelector(Selector.A_HEAD, 'click', this._headClickHandler.bind(this));
      // Handle on activated collapse and accordion.
      this._activatedCollapse();
      this._activatedAccordion();
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

    _activatedCollapse() {
      // Collapse can multiple active.
      let ts = document.querySelectorAll(Selector.C_ACTIVE);
      if (ts.length == 0) { return; }

      for (let t of ts) {
        let b = t.nextElementSibling;
        this._toggleMaxHeight(b);
      }
    }

    _activatedAccordion() {
      // Only one accordion can be active at a time. After all, only the last one will be activated.
      let hs = document.querySelectorAll(Selector.A_ACTIVE);
      if (hs.length == 0) { return; }

      for (let h of hs) {
        let a = Util.findAncestor(h, Selector.ACCORDION);
        this._allClose(a);
        h.click();
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