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
   * @param  {String|Element|NodeList} selector
   * @param  {Element} elm  baseElement
   * @return {Element}
   */
  static getElement(selector, elm = document) {
    if (typeof selector === 'string') {
      return elm.querySelector(selector);
    } else if (selector instanceof Element) {
      return selector;
    } else if (selector instanceof NodeList) {
      return selector[0];
    } else {
      throw new TypeError('selector is must be String or Element');
    }
  }

  /**
   * getElements
   *
   * @param  {String|Element|NodeList} selector
   * @param  {Element} elm  baseElement
   * @return {NodeList}
   */
  static getElements(selector, elm = document) {
    if (typeof selector === 'string') {
      return elm.querySelectorAll(selector);
    } else if (selector instanceof Element) {
      return this.toNodeList(selector);
    } else if (selector instanceof NodeList) {
      return selector;
    } else {
      throw new TypeError('selector is must be String or NodeList');
    }
  }

  /**
   * Element to NodeList
   *
   * @param  {Element} element
   * @return {NodeList}
   */
  static toNodeList(element) {
    element.setAttribute('toNodeList', '');
    let nodelist = document.querySelectorAll('[toNodeList]');
    element.removeAttribute('toNodeList');
    return nodelist;
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
    this.addClass(selector, ClassName.HIDE);
  }

  static show(selector) {
    this.removeClass(selector, ClassName.HIDE);
  }

  static toggleShow(selector) {
    let elm = this.getElement(selector);
    if (elm.classList.contains(ClassName.HIDE)) {
      this.show(selector);
    } else {
      this.hide(selector);
    }
  }

  static filter(selector, filter, htmlMode = false) {
    let elms = this.getElements(selector);

    if (elms.length === 1 && elms[0].tagName === 'TABLE') {
      return this.filterTable(elms[0], filter, htmlMode);
    } else {
      return this.filterElements(elms, filter, htmlMode);
    }
  }

  static filterElements(selector, filter, htmlMode = false) {
    let elms = this.getElements(selector);
    let hit = 0;
    filter = filter.toUpperCase();

    for (let elm of elms) {
      let content = htmlMode ? elm.innerHTML : elm.textContent;

      if (content.toUpperCase().indexOf(filter) === -1) {
        this.hide(elm);
      } else {
        this.show(elm);
        hit++;
      }
    }

    return hit;
  }

  static filterTable(selector, filter, htmlMode = false) {
    let table = this.getElement(selector);
    let tableRows = this.getElements('tbody tr', table);
    let hit = 0;
    filter = filter.toUpperCase();

    for (let tr of tableRows) {
      let content = htmlMode ? tr.innerHTML : tr.textContent;

      if (content.toUpperCase().indexOf(filter) === -1) {
        this.hide(tr);
      } else {
        this.show(tr);
        hit++;
      }
    }

    return hit;
  }
}
