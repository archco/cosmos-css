/************************************************************
  scroll-to
*************************************************************/

(function () {
  var scrollToTop = document.querySelector('#scroll-to-top');
  if (! scrollToTop) { return; }

  // scroll-to-top click listener.
  scrollToTop.addEventListener('click', function () {
    $('html,body').animate({scrollTop:0}, 'slow', 'swing');
  });

  // scroll Listener.
  window.addEventListener('scroll', function () {
    let top = scrollTop();
    let isShow = scrollToTop.classList.contains('show');

    if (top > 500 && !isShow) {
      scrollToTop.classList.add('show');
    } else if (top <= 500 && isShow) {
      scrollToTop.classList.remove('show');
    }
  });
})();

/**
 * scrollTop
 * 
 * @return Number
 */
function scrollTop() {
  var top = 0;
  if (typeof(window.pageYOffset) == "number") {
    top = window.pageYOffset;
  } else if (document.body && document.body.scrollTop) {
    top = document.body.scrollTop;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    top = document.documentElement.scrollTop;
  }
  return top;
}
