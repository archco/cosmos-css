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
    var btns = document.querySelectorAll(`.${ClassName.TOGGLE}`);
    if (!btns) { return; }
    
    for (let btn of btns) {
      btn.addEventListener('click', _toggleButtonHandler);
    }

    window.onclick = _otherClickHandler;
  };

  var _toggleButtonHandler = (event) => {
    // toggling dropdown content.
    let c = event.target.parentNode.querySelector(`.${ClassName.CONTENT}`);
    if (c) {
      c.classList.toggle(ClassName.SHOW);
    }
  };

  var _otherClickHandler = (event) => {
    // Close the dropdown menu if the user clicks outside of it
    if (!event.target.classList.contains(ClassName.TOGGLE)) {
      _closeElseDropdown();
    } else {
      let t = event.target.parentNode; // .dropdown
      _closeElseDropdown(t);
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