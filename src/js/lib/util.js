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
     * @param  string    selector   querySelector
     * @param  string    type       event type
     * @param  function  listener   event listener
     * @param  Boolean   useCapture
     * @return number|null
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
     * @param element  element  current element
     * @param string   selector
     */
    static findAncestor(element, selector) {
      do {
        element = element.parentElement;
      } while(!element.matches(selector));
      return element;
    }

    /**
     * wrap elements by div.wrapper
     * @param  string  target  querySelector
     * @param  string  wrapper wrapper's class name
     * @return void
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
     * @param  string  target  querySelector
     * @param  string  wrapper wrapper's class name
     * @return void
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
  }

  return Util;
})();

export default Util;
