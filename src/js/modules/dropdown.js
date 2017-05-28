import CosmosModule from '../lib/cosmos-module.js';
import ElementUtil from '../lib/element-util.js';

/************************************************************
  dropdown
*************************************************************/
const NAME = 'dropdown';
const ClassName = {
  DROPDOWN: 'dropdown',
  TOGGLE: 'dropdown-toggle',
  CONTENT: 'dropdown-content',
  SHOW: 'show',
};
const Selector = {
  DROPDOWN: `.${ClassName.DROPDOWN}`,
  TOGGLE: `.${ClassName.TOGGLE}`,
  CONTENT: `.${ClassName.CONTENT}`,
};

class Dropdown extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  // public

  init() {
    // toggling dropdown content.
    ElementUtil.addListener(Selector.TOGGLE, 'click', this._toggleButtonHandler.bind(this));

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
   * @param  {element} target  except target
   * @return {void}
   */
  _closeElseDropdown(target = null) {
    var dropdowns = document.querySelectorAll(Selector.DROPDOWN);

    for (let dropdown of dropdowns) {
      let content = dropdown.querySelector(Selector.CONTENT);
      if (target && target == dropdown) continue; // except target

      if (content.classList.contains(ClassName.SHOW)) {
        content.classList.remove(ClassName.SHOW);
      }
    }
  }
}

export default Dropdown;
