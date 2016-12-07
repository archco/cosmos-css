/************************************************************
  nav
*************************************************************/

(function () {
  // Responsive Nav
  $(".menu-toggle").click(function(){
    // parent nav
    let nav = this.parentNode.parentNode;
    // menu groups
    let menuGroups = [
      '.menu-main',
      '.menu-left',
      '.menu-right',
      '.menu-center',
    ];

    // button toggle
    this.classList.toggle('change');
    // menu display toggle
    for (let m of menuGroups) {
      $(nav).find(m).slideToggle();
    }
  });

  $(window).resize(function(){
    var w = $(window).width();
    var menu = $("nav ul");
    if (w > 768 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
})();
