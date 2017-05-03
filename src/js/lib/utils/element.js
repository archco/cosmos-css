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

  /**
   * Converting a NodeList to an Array.
   *
   * @param  {NodeList} nodelist
   * @return {Array}
   */
  static nodeListToArray(nodelist) {
    return Array.prototype.slice.call(nodelist);
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

    return this._filtering(elms, filter, htmlMode);
  }

  static filterTable(selector, filter, htmlMode = false) {
    let table = this.getElement(selector);
    let tableRows = this.getElements('tbody tr', table);

    return this._filtering(tableRows, filter, htmlMode);
  }

  static _filtering(nodes, filter, htmlMode = false) {
    let hit = 0;
    filter = filter.toUpperCase();

    for (let node of nodes) {
      let content = htmlMode ? node.innerHTML : node.textContent;

      if (content.toUpperCase().indexOf(filter) === -1) {
        this.hide(node);
      } else {
        this.show(node);
        hit++;
      }
    }

    return hit;
  }

  static sortElements(selector, itemSelector) {
    let parent = this.getElement(selector);
    let items = this.nodeListToArray(this.getElements(itemSelector, parent));
    let order = {
      asc(a, b) {
        let aVal = (a.dataset.sortValue + a.textContent).toUpperCase();
        let bVal = (b.dataset.sortValue + b.textContent).toUpperCase();
        return aVal.localeCompare(bVal);
      },
      desc(a, b) {
        let aVal = (a.dataset.sortValue + a.textContent).toUpperCase();
        let bVal = (b.dataset.sortValue + b.textContent).toUpperCase();
        return bVal.localeCompare(aVal);
      }
    };

    if (parent.dataset.sortOrderBy === 'asc') {
      parent.dataset.sortOrderBy = 'desc';
    } else {
      parent.dataset.sortOrderBy = 'asc';
    }

    this._sorting(items, order[parent.dataset.sortOrderBy]);
  }

  static sortTable(selector) {
    let table = this.getElement(selector);
    let heads = this.getElements('thead th', table);
    let rows = this.nodeListToArray(this.getElements('tbody tr', table));

    heads.forEach((v, i) => {
      v.addEventListener('click', (e) => {
        e.preventDefault();
        let th = e.currentTarget;
        if (th.dataset.sortOrderBy === 'asc') {
          th.dataset.sortOrderBy = 'desc';
        } else {
          th.dataset.sortOrderBy = 'asc';
        }
        this._sortingTable(rows, i + 1, th.dataset.sortOrderBy);
      });
    });
  }

  static _sortingTable(rows, nth, direction) {
    let order = {
      asc(a, b) {
        a = this.getElement(`td:nth-child(${nth})`, a);
        b = this.getElement(`td:nth-child(${nth})`, b);
        let aVal = (a.dataset.sortValue + a.textContent).toUpperCase();
        let bVal = (b.dataset.sortValue + b.textContent).toUpperCase();
        return aVal.localeCompare(bVal);
      },
      desc(a, b) {
        a = this.getElement(`td:nth-child(${nth})`, a);
        b = this.getElement(`td:nth-child(${nth})`, b);
        let aVal = (a.dataset.sortValue + a.textContent).toUpperCase();
        let bVal = (b.dataset.sortValue + b.textContent).toUpperCase();
        return bVal.localeCompare(aVal);
      }
    };

    this._sorting(rows, order[direction].bind(this));
  }

  static _sorting(items, compareMethod) {
    items.sort(compareMethod);
    items.forEach(v => {
      let p = v.parentNode;
      p.removeChild(v);
      p.appendChild(v);
    });
  }
}
