/************************************************************
  util
*************************************************************/
const Util = (() => {
  const NAME = 'Cosmos.Util';

  // public

  /**
   * event on selector
   * 
   * @param  string    selector   querySelector
   * @param  string    type       event type
   * @param  function  listener   event listener
   * @param  Boolean   useCapture
   * @return number|null
   */
  var eventOnSelector = (selector, type, listener, useCapture = false) => {
    let elements = document.querySelectorAll(selector);

    if (elements.length == 0) {
      return null;
    }

    for (let element of elements) {
      element.addEventListener(type, listener, useCapture);
    }

    return elements.length;
  };

  return {
    name: NAME,
    eventOnSelector: eventOnSelector
  };
})();

export default Util;
