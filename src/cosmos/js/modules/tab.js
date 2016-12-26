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
      // add event handler on links.
      Util.eventOnSelector(Selector.LINK, 'click', this._tabHandle.bind(this));

      // load tabs.
      let tabs = this._getTabs();
      if (tabs.length > 0) {
        for (let t of tabs) {
          this._loadTab(t);
        }  
      }
    }

    setDefault(linkIndex, tabIndex = null) {
      if (tabIndex == null) {
        // all tabs.
        let tabs = this._getTabs();
        tabs.forEach((e, i, a) => {
          this._default(linkIndex, i);
        });
      } else {
        this._default(linkIndex, tabIndex);  
      }
    }

    // static
    
    static get name() {
      return NAME;
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

  return Tab;
})();

export default Tab;
