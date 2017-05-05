import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';
import eu from '../lib/element-util.js';

/************************************************************
  nav
*************************************************************/
const NAME = 'Cosmos.Nav';
const ClassName = {
  NAVBAR: 'navbar',
  TOGGLE_BTN: 'menu-toggle',
  CHANGE: 'change',
  USE_ACTIVATOR: 'use-activator',
};
const Selector = {
  TOGGLE_BTN: `nav.${ClassName.NAVBAR} .${ClassName.TOGGLE_BTN}`,
  USE_ACTIVATOR: `nav.${ClassName.NAVBAR} ul.${ClassName.USE_ACTIVATOR}`,
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

class Nav extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  // public

  init() {
    eu.addListener(Selector.TOGGLE_BTN, 'click', this._toggleHandler);

    this.activator(Selector.USE_ACTIVATOR);

    // handle jQuery slide style.
    $(window).resize(function () {
      var w = $(window).width();
      var menu = $("nav ul");
      if (w > 768 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  }

  /**
   * activator
   *
   * @param  string selector  menu selector string
   * @return void
   */
  activator(selector) {
    let links = document.querySelectorAll(selector + ' a');
    if (links.length === 0) return;

    for (let a of links) {
      if (compareWithLocation(a)) {
        a.parentNode.classList.add('active');
      }
    }

    function compareWithLocation(anchor) {
      let l = {
        path: lastTerm(document.location.pathname),
        query: Util.locationSearchToObject()
      };
      let a = {
        path: lastTerm(anchor.pathname),
        query: Util.searchToObject(anchor.search)
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
      return string.substr(string.lastIndexOf("/"));
    }
  }

  // private

  _toggleHandler(event) {
    let t = event.currentTarget;
    let nav = t.parentNode.parentNode;
    // toggle button class change.
    t.classList.toggle(ClassName.CHANGE);
    // menu slide (use jQuery)
    for (let m of MenuGroups) {
      $(nav).find(m).slideToggle();
    }
  }
}

export default Nav;
