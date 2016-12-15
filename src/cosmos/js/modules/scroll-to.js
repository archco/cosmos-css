/************************************************************
  scroll-to
*************************************************************/
const ScrollTo = (() => {
  const NAME = 'Cosmos.ScrollTo';
  const Config = {
    TOTOP: '#scroll-to-top',
    SHOW: 'show'
  };

  var btnToTop = document.querySelector(Config.TOTOP);

  var load = () => {
    if (!btnToTop) { return; }

    // scroll-to-top button listener
    btnToTop.addEventListener('click', () => {
      let top = 0;
      $('body').animate({scrollTop: top}, 'slow', 'swing');
    });
    
    // scroll listener
    window.addEventListener('scroll', _scrollHandler);
  };

  var _scrollHandler = () => {
    let top = _getScrollTop();
    let isShow = btnToTop.classList.contains(Config.SHOW);

    if (top > 500 && !isShow) {
      btnToTop.classList.add(Config.SHOW);
    } else if (top <= 500 && isShow) {
      btnToTop.classList.remove(Config.SHOW);
    }
  };

  var _getScrollTop = () => {
    return $('body').scrollTop();
  };

  var _getScrollBottom = () => {
    return $(document).height();
  };

  return {
    name: NAME,
    load: load
  };
})();

export default ScrollTo;
