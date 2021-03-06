/*!
 * cosmos-css - The css framework for personal practice.
 * @version v0.12.2
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
import CosmosModule from './lib/cosmos-module.js';
import uaParser from 'ua-parser-js';
import pkg from '../../package.json';

// Libraries.
import Util from './lib/util.js';
import Color from './lib/color.js';
import ElementUtil from './lib/element-util.js';
import changeCase from 'change-case';

// Loadable Modules.
import Scaffolding from './modules/scaffolding.js';
import Dropdown from './modules/dropdown.js';
import Message from './modules/message.js';
import Modal from './modules/modal.js';
import Nav from './modules/nav.js';
import Parallax from './modules/parallax.js';
import ScrollTo from './modules/scroll-to.js';
import Tab from './modules/tab.js';
import SimpleCRUD from './modules/simple-crud.js';

// both of loadable and Functional.
import Collapse from './modules/collapse.js';
import Button from './modules/button.js';

// Functional modules. - nonloadable
import Chip from './modules/chip.js';
import Toast from './modules/toast.js';

const Libraries = {
  Util,
  Color,
  ElementUtil,
  changeCase,
  uaParser,
};

class Cosmos extends CosmosModule {
  constructor(option = {}) {
    super(option);
    this.lib = Libraries;
    this.userAgent = uaParser(navigator.userAgent);
  }

  static get version() {
    return pkg.version;
  }

  static get isLoadable() {
    return true;
  }

  static get isFunctional() {
    return true;
  }

  static get lib() {
    return Libraries;
  }

  get version() {
    return pkg.version;
  }

  init() {
    this.addSubModules([
      Scaffolding,
      Button,
      Dropdown,
      Message,
      Modal,
      Nav,
      Parallax,
      ScrollTo,
      Tab,
      Collapse,
      SimpleCRUD,
      Chip,
      Toast,
    ]);
    this.loadSubModules();
    this.defineGlobalHelperFunctions();
    return this;
  }

  defineGlobalHelperFunctions() {
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
  }
}

// For convenience to access functional modules.
Object.assign(Cosmos, {
  Button,
  Chip,
  Toast,
  Collapse,
  Modal,
});

// export.
export default Cosmos;
export {
  Util,
  ElementUtil,
  Color,
  Button,
  Chip,
  Toast,
  Collapse,
  Modal,
};
