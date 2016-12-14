import AjaxLoading from './modules/ajax-loading.js';
import Helper from './modules/helper.js';
import Dropdown from './modules/dropdown.js';
import Message from './modules/message.js';

(function () {
  console.log(AjaxLoading.name);
  AjaxLoading.load();
  console.log(Dropdown.name);
  Dropdown.load();
  console.log(Message.name);
  Message.load();
})();

// helper functions
function submitConfirm(form, message) {
  Helper.submitConfirm(form, message);
}

function checkMobileSize() {
  return Helper.checkMobileSize();
}

function showMessage(message, status) {
  Message.showMessage(message, status);
}