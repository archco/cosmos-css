import AjaxLoading from './modules/ajax-loading.js';
import Dropdown from './modules/dropdown.js';
import Helper from './modules/helper.js';
import Message from './modules/message.js';
import Nav from './modules/nav.js';
import Parallax from './modules/parallax.js';

// loading modules.
(function () {
  console.log(AjaxLoading.name);
  AjaxLoading.load();
  console.log(Dropdown.name);
  Dropdown.load();
  console.log(Message.name);
  Message.load();
  console.log(Nav.name);
  Nav.load();
  console.log(Parallax.name);
  Parallax.load();
})();

// define helper functions.
function submitConfirm(form, message) {
  Helper.submitConfirm(form, message);
}

function checkMobileSize() {
  return Helper.checkMobileSize();
}

function showMessage(message, status) {
  Message.showMessage(message, status);
}