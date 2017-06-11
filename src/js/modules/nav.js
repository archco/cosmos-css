import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';
import ElementUtil from '../lib/element-util.js';

/************************************************************
  nav
*************************************************************/
const NAME = 'nav';
const ClassName = {
  CHANGE: 'change',
  HIDE: 'display-hide',
};
const Selector = {
  NAVBAR: '.navbar',
  NAVBAR_BODY: '.navbar .navbar-body',
  NAVBAR_TOGGLE: '.navbar-toggle',
  USE_ACTIVATOR: '.navbar .use-activator',
};
const MenuGroups = [
  '.menu-float-left',
  '.menu-float-right',
  '.menu-left',
  '.menu-right',
  '.menu-center',
  '.menu-between',
  '.menu-around',
];

export default class Nav extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  // public

  init() {
    let btns = ElementUtil.getElements(Selector.NAVBAR_TOGGLE);
    for (let btn of btns) {
      this._convertNavbarToggle(btn);
      btn.addEventListener('click', this._toggleHandler);
    }

    this.activator(Selector.USE_ACTIVATOR);

    window.addEventListener('resize', this._bodyInitialize);
    this._bodyInitialize();
  }

  /**
   * activator
   *
   * @param  string selector  menu selector string
   * @return void
   */
  activator(selector) {
    let links = document.querySelectorAll(selector + ' a');
    if (!links.length) return;

    for (let a of links) {
      if (compareWithLocation(a)) {
        a.parentNode.classList.add('active');
      }
    }

    function compareWithLocation(anchor) {
      let l = {
        path: lastTerm(document.location.pathname),
        query: Util.locationSearchToObject(),
      };
      let a = {
        path: lastTerm(anchor.pathname),
        query: Util.searchToObject(anchor.search),
      };

      if (anchor.getAttribute('href') == '#') {
        // sample link (e.g. <a href="#">)
        return false;
      }

      if (l.path == a.path) {
        if (!a.query || Util.isContains(l.query, a.query)) return true;
      }

      return false;
    }

    function lastTerm(string) {
      return string.substr(string.lastIndexOf('/'));
    }
  }

  // private

  _toggleHandler(event) {
    let btn = event.currentTarget;
    let navbar = ElementUtil.findAncestor(btn, Selector.NAVBAR);
    let body = navbar.querySelector(Selector.NAVBAR_BODY);
    let isBodyHide = body.classList.contains(ClassName.HIDE);

    if (isBodyHide) {
      btn.classList.add(ClassName.CHANGE);
      body.classList.remove(ClassName.HIDE);
    } else {
      btn.classList.remove(ClassName.CHANGE);
      body.classList.add(ClassName.HIDE);
    }
  }

  _convertNavbarToggle(btn) {
    let bar1 = document.createElement('DIV');
    let bar2 = document.createElement('DIV');
    let bar3 = document.createElement('DIV');
    let span = document.createElement('SPAN');

    [bar1, bar2, bar3].forEach((elm, i) => elm.classList.add(`icon-bar${i + 1}`));
    span.textContent = btn.textContent;
    span.classList.add(ClassName.HIDE);
    btn.innerHTML = '';
    [span, bar1, bar2, bar3].forEach(elm => btn.appendChild(elm));
    return btn;
  }

  _bodyInitialize() {
    let navBodys = document.querySelectorAll(Selector.NAVBAR_BODY);
    let isMobileSize = Util.isMobileSize(768);

    if (!navBodys.length) return;

    for (let body of navBodys) {
      let isHide = body.classList.contains(ClassName.HIDE);

      if (isMobileSize && !isHide) {
        body.classList.add(ClassName.HIDE);
      }
      if (!isMobileSize && isHide) body.classList.remove(ClassName.HIDE);
    }
  }
}
