/************************************************************
  util
*************************************************************/

/**
 * submitConfirm - confirm 을 취소하면 event.preventDefault()
 * 
 * @param  {element} form
 * @param  {sting} message
 */
function submitConfirm(form, message) {
  var message = typeof message !== 'undefined' ? message : 'Are you confirm?';
  form.addEventListener('submit', function(event) {
    if (! confirm(message)) {
      event.preventDefault();
    }
  });
}

/**
 * checkMobileSize
 * 
 * @return {bool}
 */
function checkMobileSize() {
  if (window.innerWidth < 800) {
    return true;
  } else {
    return false;
  }
}