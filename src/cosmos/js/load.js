import Color from './lib/color.js';
import AjaxLoading from './modules/ajax-loading.js';
import Dropdown from './modules/dropdown.js';
import Helper from './modules/helper.js';
import Message from './modules/message.js';
import Modal from './modules/modal.js';
import Nav from './modules/nav.js';
import Parallax from './modules/parallax.js';
import ScrollTo from './modules/scroll-to.js';

// initialize - loading modules.
(function () {
  AjaxLoading.load();
  Dropdown.load();
  Message.load();
  Modal.load();
  Nav.load();
  Parallax.load();
  ScrollTo.load();
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
