import Util from './lib/util.js';
import Color from './lib/color.js';
import Scaffolding from './modules/scaffolding.js';
import AjaxLoading from './modules/ajax-loading.js';
import Dropdown from './modules/dropdown.js';
import Helper from './modules/helper.js';
import Message from './modules/message.js';
import Modal from './modules/modal.js';
import Nav from './modules/nav.js';
import Parallax from './modules/parallax.js';
import ScrollTo from './modules/scroll-to.js';
import Tab from './modules/tab.js';
import Collapse from './modules/collapse.js';
import SimpleCRUD from './modules/simple-crud.js';

// initialize - loading modules.
Scaffolding.load();
AjaxLoading.load();
Dropdown.load();
Message.load();
Modal.load();
Nav.load();
Parallax.load();
ScrollTo.load();
Tab.load();
Collapse.load();
SimpleCRUD.load();

// export as library.
// export { Util, Color };
window.Cosmos.Util = Util;
window.Cosmos.Color = Color;

// define global helper functions.
window.submitConfirm = Helper.submitConfirm;
window.checkMobileSize = Helper.checkMobileSize;
window.showMessage = Message.showMessage;
window.modalDialog = Modal.dialog;
