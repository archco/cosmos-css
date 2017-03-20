import CosmosModule from '../lib/cosmos-module.js';

/************************************************************
  scroll-to
*************************************************************/
const ScrollTo = (() => {
  const NAME = 'Cosmos.ScrollTo';
  const Config = {
    TOTOP: '#scroll-to-top',
    SHOW: 'show'
  };

  class ScrollTo extends CosmosModule {
    constructor(option) {
      super(option);
      this.btnToTop = document.querySelector(Config.TOTOP);
    }

    // static
    
    static get name() {
      return NAME;
    }

    // public
    
    init() {
      if (!this.btnToTop) { return; }

      // scroll-to-top button listener
      this.btnToTop.addEventListener('click', () => {
        let top = 0;
        $('html,body').animate({scrollTop: top}, 'slow', 'swing');
      });
      
      // scroll listener
      window.addEventListener('scroll', this._scrollHandler.bind(this));
    }

    // private
    
    _scrollHandler() {
      let top = this._getScrollTop();
      let isShow = this.btnToTop.classList.contains(Config.SHOW);

      if (top > 500 && !isShow) {
        this.btnToTop.classList.add(Config.SHOW);
      } else if (top <= 500 && isShow) {
        this.btnToTop.classList.remove(Config.SHOW);
      }
    }

    _getScrollTop() {
      return $(window).scrollTop();
    }

    _getScrollBottom() {
      return $(document).height();
    }
  }

  return ScrollTo;
})();

export default ScrollTo;
