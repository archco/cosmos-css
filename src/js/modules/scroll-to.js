import CosmosModule from '../lib/cosmos-module.js';

/************************************************************
  scroll-to
*************************************************************/
const NAME = 'Cosmos.ScrollTo';
const Selector = {
  TOP: '#scroll-to-top'
};
const ClassName = {
  SHOW: 'show'
};
// default option.
const Default = {
  btn_top: Selector.TOP,
  animate_duration: 'default' // fast(200), default(400), slow(600)
};

class ScrollTo extends CosmosModule {
  constructor(option) {
    super(option);
    this.btnTop = document.querySelector(this.option.btn_top);
  }

  // static

  static get name() {
    return NAME;
  }

  // public

  init() {
    if (!this.btnTop) { return; }

    // scroll-to-top button listener
    this.btnTop.addEventListener('click', () => {
      $('html,body').animate({scrollTop: 0}, this.option.animate_duration, 'swing');
    });

    // scroll listener
    window.addEventListener('scroll', this._scrollHandler.bind(this));
  }

  getDefaultOption() {
    return Default;
  }

  // private

  _scrollHandler() {
    let top = this._getScrollTop();
    let isShow = this.btnTop.classList.contains(ClassName.SHOW);

    if (top > 500 && !isShow) {
      this.btnTop.classList.add(ClassName.SHOW);
    } else if (top <= 500 && isShow) {
      this.btnTop.classList.remove(ClassName.SHOW);
    }
  }

  _getScrollTop() {
    return $(window).scrollTop();
  }

  _getScrollBottom() {
    return $(document).height();
  }
}

export default ScrollTo;
