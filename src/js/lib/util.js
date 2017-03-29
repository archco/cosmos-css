/************************************************************
  util
*************************************************************/
const Util = (() => {
  const NAME = 'Cosmos.lib.Util';

  class Util {

    // static
    
    static get name() {
      return NAME;
    }

    /**
     * event on selector
     * 
     * @param  {String}   selector   querySelector
     * @param  {String}   type       event type
     * @param  {Function} listener   event listener
     * @param  {Boolean}  useCapture
     * @return {number|null}
     */
    static eventOnSelector(selector, type, listener, useCapture = false) {
      let elements = document.querySelectorAll(selector);
      if (elements.length == 0) {
        return null;
      }
      for (let element of elements) {
        element.addEventListener(type, listener, useCapture);
      }
      return elements.length;
    }

    /**
     * find ancestor by selector
     * 
     * @param  {Element} element
     * @param  {String}  selector
     * @return {Element|null}
     */
    static findAncestor(element, selector) {
      do {
        if(element == document.querySelector('html')) return null;
        element = element.parentElement;
      } while(!element.matches(selector));
      return element;
    }

    /**
     * wrap elements by div.wrapper
     * @param  {String} target  querySelector
     * @param  {String} wrapper wrapper's class name
     * @return {void}
     */
    static wrap(target, wrapper) {
      var elements = document.querySelectorAll(target);
      var div = document.createElement('div');
      div.classList.add(wrapper);
      
      for (let el of elements) {
        let parent = el.parentNode;
        let sibling = el.nextSibling;

        div.appendChild(el);

        if (sibling) {
          parent.insertBefore(div, sibling);
        } else {
          parent.appendChild(div);
        }
      }
    }

    /**
     * wrap all elements inside to div.wrapper
     * @param  {String}  target  querySelector
     * @param  {String}  wrapper wrapper's class name
     * @return {void}
     */
    static wrapAll(target, wrapper) {
      var elements = document.querySelectorAll(target);
      var div = document.createElement('div');
      div.classList.add(wrapper);
      var parent = elements[0].parentNode;
      var sibling = elements[0].nextSibling;

      elements.forEach((elm) => {
        div.appendChild(elm);
      });

      if (sibling) {
        parent.insertBefore(div, sibling);
      } else {
        parent.appendChild(div);
      }
    }

    /**
     * location.search to Object.
     * 
     * @return {Object}
     */
    static locationSearchToObject() {
      return this.searchToObject(window.location.search);
    }

    /**
     * searchToObject
     * 
     * @param  {String} search [HTMLAnchorElement.search]
     * @return {Object}
     */
    static searchToObject(search) {
      let queries = search.substring(1).split('&');
      let obj = {};

      queries.forEach((value) => {
        let q = value.split('=');
        if (!q[1]) return;
        obj[decodeURIComponent(q[0])] = decodeURIComponent(q[1]);
      });

      return obj;
    }

    /**
     * returns true if 'big' contains 'small'.
     * 
     * @param  {mixed}  big
     * @param  {mixed}  small
     * @return {Boolean}
     */
    static isContains(big, small) {
      if (typeof big !== typeof small) return false;

      if (Array.isArray(big) && Array.isArray(small)) {
        let correct = 0;
        big.forEach((v) => {
          if (small.includes(v)) correct++;
        });
        return correct == small.length;
      } else if (typeof small === 'object' && Object(small) === small) {
        for (let p in small) {
          if (!(p in big && this.isContains(big[p], small[p]))) return false;
        }
        return true;
      } else {
        return big === small;
      }
    }
  }

  return Util;
})();

export default Util;
