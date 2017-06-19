import CosmosModule from '../lib/cosmos-module.js';
import eu from '../lib/element-util.js';

/************************************************************
  Tab
*************************************************************/
const NAME = 'Tab';
const ClassName = {
  TAB: 'tab',
  TAB_VERTICAL: 'tab-vertical',
  LINK: 'tab-link',
  CONTENT: 'tab-content',
  SHOW: 'show',
  ACTIVE: 'active',
  FADE: 'fade',
  EFFECT_FADE: 'tab-fade-effect',
};
const Selector = {
  TAB: `.${ClassName.TAB},.${ClassName.TAB_VERTICAL}`,
  LINK: `.${ClassName.LINK}`,
  CONTENT: `.${ClassName.CONTENT}`,
};

export default class Tab extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  // public

  init() {
    // add event handler on links.
    eu.addListener(Selector.LINK, 'click', this._tabHandle.bind(this));

    // initialize tabs.
    let tabs = this._getTabs();
    if (tabs.length) {
      for (let t of tabs) {
        this._loadTab(t);
      }
    }
  }

  setDefault(linkIndex, tabIndex = null) {
    if (tabIndex === null) {
      // all tabs.
      let tabs = this._getTabs();
      tabs.forEach((e, i) => {
        this._default(linkIndex, i);
      });
    } else {
      this._default(linkIndex, tabIndex);
    }
  }

  // private

  _tabHandle(event) {
    let a = event.currentTarget;
    let tab = eu.findAncestor(a, Selector.TAB);
    let links = tab.querySelectorAll(Selector.LINK);
    let content = this._getContent(a);

    for (let link of links) {
      // content hide
      let content = this._getContent(link);
      content.classList.remove(ClassName.SHOW);

      // remove link.active
      link.classList.remove(ClassName.ACTIVE);
    }

    // active and show content.
    a.classList.add(ClassName.ACTIVE);
    content.classList.add(ClassName.SHOW);
    event.preventDefault();
  }

  _extractID(str) {
    let result = /([#])\S+/.exec(str);

    return (result === null) ? null : result[0];
  }

  _getContent(link) {
    let content = document.querySelector(this._extractID(link.href));
    if (content && !content.classList.contains(ClassName.CONTENT)) {
      content.classList.add(ClassName.CONTENT);
    }

    return content;
  }

  _getTabs() {
    return document.querySelectorAll(Selector.TAB);
  }

  _loadTab(tab) {
    let links = tab.querySelectorAll(Selector.LINK);
    for (let link of links) {
      // set default.
      if (link.classList.contains(ClassName.ACTIVE)) {
        link.click();
      }

      // tab fade effect.
      if (tab.classList.contains(ClassName.FADE)) {
        this._getContent(link).classList.add(ClassName.EFFECT_FADE);
      }
    }
  }

  _default(linkIndex, tabIndex) {
    let tab = this._getTabs()[tabIndex];
    let link = tab.querySelectorAll(Selector.LINK)[linkIndex];
    link.click();
  }
}
