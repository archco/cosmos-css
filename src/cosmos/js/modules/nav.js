/************************************************************
  nav
*************************************************************/
const Nav = (() => {
  const NAME = 'Cosmos.Nav';
  const ClassName = {
    TOGGLE_BTN: 'menu-toggle',
    CHANGE: 'change'
  };
  const MenuGroups = [
    '.menu-main',
    '.menu-left',
    '.menu-right',
    '.menu-center',
  ];

  var load = () => {
    let t = document.querySelector(`.${ClassName.TOGGLE_BTN}`);
    if (t) {
      // menu toggle button.
      t.addEventListener('click', _toggleHandler);
    }
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

  return {
    name: NAME,
    load: load
  };
})();

export default Nav;
