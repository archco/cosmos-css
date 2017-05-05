import CosmosModule from '../lib/cosmos-module.js';
import eu from '../lib/element-util.js';

/************************************************************
  Tab
*************************************************************/
const NAME = 'Cosmos.Tab';
const ClassName = {
  TAB: 'tab',
  LINK: 'tab-link',
  CONTENT: 'tab-content',
  SHOW: 'show',
  ACTIVE: 'active',
  FADE: 'fade',
  EFFECT_FADE: 'tab-fade-effect'
};
const Selector = {
  TAB: `.${ClassName.TAB}`,
  LINK: `.${ClassName.LINK}`,
  CONTENT: `.${ClassName.CONTENT}`
};

class Tab extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  // public

  init() {
    // add event handler on links.
    eu.addListener(Selector.LINK, 'click', this._tabHandle.bind(this));

    // initialize tabs.
    let tabs = this._getTabs();
    if (tabs.length > 0) {
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

    for (let l of links) {
      // content hide
      let c = this._getContent(l);
      c.classList.remove(ClassName.SHOW);
      // remove link.active
      l.classList.remove(ClassName.ACTIVE);
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
    let c = document.querySelector(this._extractID(link.href));
    if (c && !c.classList.contains(ClassName.CONTENT)) {
      c.classList.add(ClassName.CONTENT);
    }
    return c;
  }

  _getTabs() {
    return document.querySelectorAll(Selector.TAB);
  }

  _loadTab(tab) {
    let links = tab.querySelectorAll(Selector.LINK);
    for (let l of links) {
      // set default.
      if (l.classList.contains(ClassName.ACTIVE)) {
        l.click();
      }
      // tab fade effect.
      if (tab.classList.contains(ClassName.FADE)) {
        this._getContent(l).classList.add(ClassName.EFFECT_FADE);
      }
    }
  }

  _default(linkIndex, tabIndex) {
    let tab = this._getTabs()[tabIndex];
    let link = tab.querySelectorAll(Selector.LINK)[linkIndex];
    link.click();
  }
}

export default Tab;
