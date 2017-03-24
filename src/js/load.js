// Libraries.
import Util from './lib/util.js';
import Color from './lib/color.js';
import Helper from './lib/helper.js';
// Loadable Modules.
import Scaffolding from './modules/scaffolding.js';
import Button from './modules/button.js';
import AjaxLoading from './modules/ajax-loading.js';
import Dropdown from './modules/dropdown.js';
import Message from './modules/message.js';
import Modal from './modules/modal.js';
import Nav from './modules/nav.js';
import Parallax from './modules/parallax.js';
import ScrollTo from './modules/scroll-to.js';
import Tab from './modules/tab.js';
import Collapse from './modules/collapse.js';
import SimpleCRUD from './modules/simple-crud.js';
// Functional modules. - nonloadable
import Chip from './modules/chip.js';

// initialize - loading modules.
Scaffolding.load();
Button.load();
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

// define global helper functions.
window.submitConfirm = Helper.submitConfirm;
window.checkMobileSize = Helper.checkMobileSize;
window.showMessage = Message.showMessage;
window.modalDialog = Modal.dialog;

// export
let version = require('../../package.json').version;
const Cosmos = {
  name: 'cosmos-css',
  version: `v${version}`,
  Util: Util,
  Color: Color,
  Helper: Helper,
  Button: Button,
  Chip: Chip
};

export default Cosmos;
export { Util, Color, Helper, Button, Chip };
