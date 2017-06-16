/************************************************************
  Helper - will be deprecated.
*************************************************************/
export default class Helper {

  // static

  /**
   * submitConfirm - confirm 을 취소하면 event.preventDefault()
   * instead -> ElementUtil.submitConfirm()
   *
   * @param  {element} form
   * @param  {sting} message
   * @return {void}
   */
  static submitConfirm(form, message = 'Are you confirm?') {
    if (!form) throw new Error('Form target is not exist.');

    form.addEventListener('submit', function (event) {
      if (!confirm(message)) event.preventDefault();
    });
  }

  /**
   * check mobile size
   * instead -> Util.isMobileSize()
   *
   * @return {boolean}
   */
  static checkMobileSize() {
    if (window.innerWidth < 800) {
      return true;
    } else {
      return false;
    }
  }
}
