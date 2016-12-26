import Util from '../lib/util.js';

/************************************************************
  Tab
*************************************************************/
const Tab = (() => {
  const NAME = 'Cosmos.Tab';
  const ClassName = {
    TAB: 'tab',
    LINK: 'tab-link',
    CONTENT: 'tab-content',
    SHOW: 'show',
    HIDE: 'hide',
    ACTIVE: 'active',
    FADE: 'fade',
    EFFECT_FADE: 'tab-fade-effect'
  };
  const Selector = {
    TAB: `.${ClassName.TAB}`,
    LINK: `.${ClassName.LINK}`,
    CONTENT: `.${ClassName.CONTENT}`
  }

  class Tab {
    constructor(selector = Selector.TAB) {
      Selector.TAB = selector;
    }

    // public
    
    load() {
      // load tabs.
      let tabs = document.querySelectorAll(Selector.TAB);
      for (let t of tabs) {
        this._loadTab(t);
      }
      // add event handler on links.
      Util.eventOnSelector(`${Selector.TAB} ${Selector.LINK}`, 'click', this._tabHandle.bind(this));
    }

    // private
    
    _tabHandle(event) {
      let a = event.currentTarget;
      let tab = Util.findAncestor(a, Selector.TAB);
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

      return (result == null) ? null : result[0];
    }

    _getContent(link) {
      return document.querySelector(this._extractID(link.href));
    }

    _loadTab(tab) {
      // tab fade effect.
      if (tab.classList.contains(ClassName.FADE)) {
        let links = tab.querySelectorAll(Selector.LINK);
        for (let l of links) {
          this._getContent(l).classList.add(ClassName.EFFECT_FADE);
        }
      }
    }
  }

  return Tab;
})();

export default Tab;
