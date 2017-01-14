import Util from '../lib/util.js';

/************************************************************
  nav
*************************************************************/
const Nav = (() => {
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

  var load = () => {
    Util.eventOnSelector(Selector.TOGGLE_BTN, 'click', _toggleHandler);

    _activator(Selector.USE_ACTIVATOR);
    
    // handle jQuery slide style.
    $(window).resize(function () {
      var w = $(window).width();
      var menu = $("nav ul");
      if (w > 768 && menu.is(':hidden')) {
        menu.removeAttr('style');
      }
    });
  };

  var _toggleHandler = (event) => {
    let t = event.currentTarget;
    let nav = t.parentNode.parentNode;
    // toggle button class change.
    t.classList.toggle(ClassName.CHANGE);
    // menu slide (use jQuery)
    for (let m of MenuGroups) {
      $(nav).find(m).slideToggle();
    }
  };

  /**
   * _activator (beta version)
   * @param  string  selector
   * @return void
   */
  var _activator = function _activator(selector) {
    let links = document.querySelectorAll(selector + ' a');
    if (links.length == 0) { return; }
    let l = document.location.pathname;
    
    for (let a of links) {
      if (lastTerm(l) == lastTerm(a.href)) {
        //console.log(lastTerm(l), lastTerm(a.href));
        a.parentNode.classList.add('active');
      }
    }

    function lastTerm(string) {
      return string.substr(string.lastIndexOf("/"));
    }
  }

  return {
    name: NAME,
    load: load
  };
})();

export default Nav;
