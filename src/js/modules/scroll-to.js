import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';
import eu from '../lib/element-util.js';

/************************************************************
  scroll-to
*************************************************************/
const NAME = 'Cosmos.ScrollTo';
const ClassName = {
  CONTAINER: 'scroll-to-container',
  TOTOP: 'scroll-to-top',
  TOBOTTOM: 'scroll-to-bottom',
  SHOW: 'show',
};
const Selector = {
  TOP: `.${ClassName.TOTOP}`,
  BOTTOM: `.${ClassName.TOBOTTOM}`,
};

// default option.
const Default = {
  btn_top: Selector.TOP,
  btn_bottom: Selector.BOTTOM,
  scroll_duration: 600, // 300: fast, 600: default, 900: slow
  scroll_easing: 'easeOutCubic',
  show_distance: 400,
};

class ScrollTo extends CosmosModule {
  constructor(option) {
    super(option);
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
    eu.addListener(this.option.btn_top, 'click', () => {
      Util.scrollIt(0, duration, easing);
    });
    eu.addListener(this.option.btn_bottom, 'click', () => {
      Util.scrollIt(this._getDocumentBottom(), duration, easing);
    });

    // scroll listener
    if (this.option.show_distance) {
      window.addEventListener('scroll', this._scrollHandler.bind(this));
      this._scrollHandler(); // invoke once.
    } else {
      this._showBtns(); // show buttons.
    }
  }

  getDefaultOption() {
    return Default;
  }

  // private

  _scrollHandler() {
    let top = this._getScrollTop();
    let bottom = this._getScrollBottom();
    let distance = this.option.show_distance;
    let toTop = document.querySelector(this.option.btn_top);
    let toBottom = document.querySelector(this.option.btn_bottom);

    // toTop
    if (top > distance && !this._isShown(toTop)) {
      toTop.classList.add(ClassName.SHOW);
    } else if (top <= distance && this._isShown(toTop)) {
      toTop.classList.remove(ClassName.SHOW);
    }

    // toBottom
    if (bottom > distance && !this._isShown(toBottom)) {
      toBottom.classList.add(ClassName.SHOW);
    } else if (bottom <= distance && this._isShown(toBottom)) {
      toBottom.classList.remove(ClassName.SHOW);
    }
  }

  _isShown(elm) {
    return elm.classList.contains(ClassName.SHOW);
  }

  _getScrollTop() {
    return window.scrollY || window.pageYOffset;
  }

  _getScrollBottom() {
    return this._getDocumentBottom() - (this._getScrollTop() + window.innerHeight);
  }

  _getDocumentTop() {
    return document.documentElement.offsetTop || 0;
  }

  _getDocumentBottom() {
    return document.documentElement.scrollHeight;
  }

  _showBtns() {
    let toTop = document.querySelector(this.option.btn_top);
    let toBottom = document.querySelector(this.option.btn_bottom);

    if (toTop) toTop.classList.add(ClassName.SHOW);
    if (toBottom) toBottom.classList.add(ClassName.SHOW);
  }
}

export default ScrollTo;
