/*!
 * cosmos-css - The css framework for personal practice.
 * @version v0.11.1
 * @link https://github.com/archco/cosmos-css#readme
 * @license MIT
 */
import CosmosModule from './lib/cosmos-module.js';
import pkg from '../../package.json';

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

class Cosmos extends CosmosModule {
  constructor(option = {}) {
    super(option);
    this.modules = new Map();
  }

  static get version() {
    return pkg.version;
  }

  static get isLoadable() {
    return true;
  }

  static get lib() {
    return {
      Util,
      Color,
      ElementUtil,
    };
  }

  static load(option = {}) {
    let cosmos = new this(option);
    cosmos.init();
    return this;
  }

  init() {
    this.addModules([
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
    ]);
    this.loadModules();
    this.defineGlobalHelperFunctions();
    return this;
  }

  addModules(modules) {
    for (let mod of modules) {
      this.modules.set(mod.name, mod);
    }

    return this;
  }

  removeModules(modules) {
    for (let mod of modules) {
      this.modules.delete(mod.name);
    }

    return this;
  }

  loadModules() {
    this.modules.forEach(mod => {
      if (!mod.isLoadable) return;
      mod.load(this.getModuleOption(mod.name));
    });
  }

  getModuleOption(modName) {
    if (this.option.modules && this.option.modules[modName]) {
      return this.option.modules[modName];
    } else {
      return {};
    }
  }

  setModuleOption(modName, option) {
    this.option.modules[modName] = option;
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

// export.
Object.assign(Cosmos, {
  Button,
  Chip,
  Toast,
  Collapse,
});

export default Cosmos;
export {
  Util,
  ElementUtil,
  Color,
  Helper,
  Button,
  Chip,
  Toast,
  Collapse,
};
