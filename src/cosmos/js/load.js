import AjaxLoading from './modules/ajax-loading.js';
import Helper from './modules/helper.js';
import Dropdown from './modules/dropdown.js';

(function () {
  console.log(AjaxLoading.name);
  AjaxLoading.load();
  console.log(Dropdown.name);
  Dropdown.load();
})();

// helper functions
function submitConfirm(form, message) {
  Helper.submitConfirm(form, message);
}

function checkMobileSize() {
  return Helper.checkMobileSize();
}