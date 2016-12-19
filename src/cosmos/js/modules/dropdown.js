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

  var load = () => {
    // toggling dropdown content.
    Util.eventOnSelector(`.${ClassName.TOGGLE}`, 'click', _toggleButtonHandler);
    
    // Close the dropdown menu if the user clicks outside of it
    window.addEventListener('click', _otherClickHandler);
  };

  var _toggleButtonHandler = (event) => {
    let c = event.currentTarget.parentNode.querySelector(`.${ClassName.CONTENT}`);
    if (c) {
      c.classList.toggle(ClassName.SHOW);
    }
  };

  var _otherClickHandler = (event) => {
    let t = event.target;
    
    if (t.classList.contains(ClassName.TOGGLE)) {
      // dropdown
      let dropdown = t.parentNode;
      _closeElseDropdown(dropdown);
    } else {
      // not dropdown
      _closeElseDropdown();
    }
  };

  /**
   * close dropdown contents
   * 
   * @param  {element} t  except target
   * @return {void}
   */
  var _closeElseDropdown = (t = null) => {
    var ds = document.querySelectorAll(`.${ClassName.DROPDOWN}`);

    for (let d of ds) {
      let c = d.querySelector(`.${ClassName.CONTENT}`);
      if (t && t == d) { continue; } // except target
      if (c.classList.contains(ClassName.SHOW)) {
        c.classList.remove(ClassName.SHOW);
      }
    }
  }

  return {
    name: NAME,
    load: load
  };
})();

export default Dropdown;
