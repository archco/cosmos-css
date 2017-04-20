import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';

/************************************************************
  scroll-to
*************************************************************/
const NAME = 'Cosmos.ScrollTo';
const ClassName = {
  CONTAINER: 'scroll-to-container',
  TOTOP: 'scroll-to-top',
  TOBOTTOM: 'scroll-to-bottom',
  SHOW: 'show'
};
const Selector = {
  CONTAINER: `.${ClassName.CONTAINER}`,
  TOP: `.${ClassName.TOTOP}`,
  BOTTOM: `.${ClassName.TOBOTTOM}`
};

// default option.
const Default = {
  btn_top: Selector.TOP,
  btn_bottom: Selector.BOTTOM,
  scroll_duration: 600, // 300: fast, 600: default, 900: slow
  scroll_easing: 'easeOutCubic'
};

class ScrollTo extends CosmosModule {
  constructor(option) {
    super(option);
    this.btnTop = this.option.btn_top;
    this.btnBottom = this.option.btn_bottom;
  }

  // static

  static get name() {
    return NAME;
  }

  // public

  init() {
    let duration = this.option.scroll_duration;
    let easing = this.option.scroll_easing;

    // button listener
    Util.eventOnSelector(this.btnTop, 'click', () => {
      Util.scrollIt(0, duration, easing);
    });
    Util.eventOnSelector(this.btnBottom, 'click', () => {
      Util.scrollIt(this._getDocumentBottom(), duration, easing);
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
    let container = document.querySelector(Selector.CONTAINER);
    let isShow = container.classList.contains(ClassName.SHOW);

    if (top > 500 && !isShow) {
      container.classList.add(ClassName.SHOW);
    } else if (top <= 500 && isShow) {
      container.classList.remove(ClassName.SHOW);
    }
  }

  _getScrollTop() {
    return window.scrollY || window.pageYOffset;
  }

  _getDocumentTop() {
    return document.documentElement.offsetTop || 0;
  }

  _getDocumentBottom() {
    return document.documentElement.scrollHeight;
  }
}

export default ScrollTo;
