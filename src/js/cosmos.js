/*!
 * cosmos-css - The css framework for personal practice.
 * @version v0.11.0
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */

// Libraries.
import Util from './lib/util.js';
import Color from './lib/color.js';
import Helper from './lib/helper.js';
import ElementUtil from './lib/element-util.js';
// Loadable Modules.
import Scaffolding from './modules/scaffolding.js';
import Button from './modules/button.js';
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
import Toast from './modules/toast.js';

// initialize - loading modules.
Scaffolding.load();
Button.load();
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
window.submitConfirm = (selector, message = 'Are you confirm?') => {
  ElementUtil.submitConfirm(selector, message);
};
window.showToast = (text, duration = null, option = {}) => {
  Toast.makeText(text, duration, option).show();
};
window.checkMobileSize = window.isMobileSize = Util.isMobileSize;
window.showMessage = Message.showMessage;
window.modalDialog = Modal.dialog;

// export
let version = require('../../package.json').version;
const lib = {
  Util,
  Color,
  ElementUtil
};
const Cosmos = {
  name: 'cosmos-css',
  version: `v${version}`,
  lib,
  Button,
  Chip,
  Toast
};

export default Cosmos;
export { Util, ElementUtil, Color, Helper, Button, Chip, Toast };
