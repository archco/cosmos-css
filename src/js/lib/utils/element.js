/************************************************************
  Element
*************************************************************/
const NAME = 'Cosmos.Util.Element';
const ClassName = {
  SHOW: 'display-show',
  HIDE: 'display-hide'
};

export default class UtilElement {
  static get name() {
    return NAME;
  }

  /**
   * getElement
   *
   * @param  {String|Element} selector
   * @return {Element}
   */
  static getElement(selector) {
    if (typeof selector === 'string') {
      return document.querySelector(selector);
    } else if (selector instanceof Element) {
      return selector;
    } else {
      throw new TypeError('selector is must be String or Element');
    }
  }

  /**
   * getElements
   *
   * @param  {String|NodeList} selector
   * @return {NodeList}
   */
  static getElements(selector) {
    if (typeof selector === 'string') {
      return document.querySelectorAll(selector);
    } else if (selector instanceof NodeList) {
      return selector;
    } else {
      throw new TypeError('selector is must be String or NodeList');
    }
  }

  static addClass(selector, className) {
    let elm = this.getElement(selector);
    elm.classList.add(className);
  }

  static removeClass(selector, className) {
    let elm = this.getElement(selector);
    elm.classList.remove(className);
  }

  static toggleClass(selector, className) {
    let elm = this.getElement(selector);
    elm.classList.toggle(className);
  }

  static hide(selector) {
    this.removeClass(selector, ClassName.SHOW);
    this.addClass(selector, ClassName.HIDE);
  }

  static show(selector) {
    this.removeClass(selector, ClassName.HIDE);
    this.addClass(selector, ClassName.SHOW);
  }

  static toggleShow(selector) {
    let elm = this.getElement(selector);
    if (elm.classList.contains(ClassName.HIDE)) {
      this.show(selector);
    } else {
      this.hide(selector);
    }
  }
}
