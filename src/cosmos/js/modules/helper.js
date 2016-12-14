const Helper = (() => {
  const NAME = 'Cosmos.Helper';

  /**
   * submitConfirm - confirm 을 취소하면 event.preventDefault()
   * 
   * @param  {element} form
   * @param  {sting} message
   * @return {void}
   */
  var submitConfirm = (form, message = 'Are you confirm?') => {
    if (!form) {
      throw new Error('Form target is not exist.');
    }
    form.addEventListener('submit', function(event) {
      if (!confirm(message)) {
        event.preventDefault();
      }
    });
  };

  /**
   * check mobile size
   * 
   * @return {boolean}
   */
  var checkMobileSize = () => {
    if (window.innerWidth < 800) {
      return true;
    } else {
      return false;
    }
  };

  return {
    name: NAME,
    submitConfirm: submitConfirm,
    checkMobileSize: checkMobileSize
  };
})();

export default Helper;