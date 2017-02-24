import Util from '../lib/util.js';

/************************************************************
  dropdown
*************************************************************/
const Dropdown = (() => {
  const NAME = 'Cosmos.Dropdown';
  const ClassName = {
    DROPDOWN: 'dropdown',
    TOGGLE: 'dropdown-toggle',
    CONTENT: 'dropdown-content',
    SHOW: 'show'
  };
  const Selector = {
    DROPDOWN: `.${ClassName.DROPDOWN}`,
    TOGGLE: `.${ClassName.TOGGLE}`,
    CONTENT: `.${ClassName.CONTENT}`
  };

  class Dropdown {

    // static
    
    static get name() {
      return NAME;
    }

    static load() {
      let d = new Dropdown;
      d.init();
    }

    // public
    
    init() {
      // toggling dropdown content.
      Util.eventOnSelector(Selector.TOGGLE, 'click', this._toggleButtonHandler.bind(this));
      
      // Close the dropdown menu if the user clicks outside of it
      window.addEventListener('click', this._otherClickHandler.bind(this));
    }

    // private
    
    _toggleButtonHandler(event) {
      let c = event.currentTarget.parentNode.querySelector(Selector.CONTENT);
      if (c) {
        c.classList.toggle(ClassName.SHOW);
      }
    }

    _otherClickHandler(event) {
      let t = event.target;
      
      if (t.classList.contains(ClassName.TOGGLE)) {
        // dropdown
        let dropdown = t.parentNode;
        this._closeElseDropdown(dropdown);
      } else {
        // not dropdown
        this._closeElseDropdown();
      }
    }

    /**
     * close dropdown contents
     * 
     * @param  {element} t  except target
     * @return {void}
     */
    _closeElseDropdown(t = null) {
      var ds = document.querySelectorAll(Selector.DROPDOWN);

      for (let d of ds) {
        let c = d.querySelector(Selector.CONTENT);
        if (t && t == d) { continue; } // except target
        if (c.classList.contains(ClassName.SHOW)) {
          c.classList.remove(ClassName.SHOW);
        }
      }
    }
  }

  return Dropdown;
})();

export default Dropdown;
