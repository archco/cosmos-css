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
    ACTIVE: 'active'
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
      console.log(NAME, 'load()');
      Util.eventOnSelector(`${Selector.TAB} ${Selector.LINK}`, 'click', this._tabHandle);
    }

    // private
    
    _tabHandle(event) {
      let contents = document.querySelectorAll(Selector.CONTENT);
      let links = document.querySelectorAll(Selector.LINK);
      let a = event.currentTarget;
      let content = document.querySelector(Tab.extractID(a.href));

      // contents hide.
      for (let c of contents) {
        c.classList.remove(ClassName.SHOW);
      }
      // remove active.
      for (let l of links) {
        l.classList.remove(ClassName.ACTIVE);
      }
      // active and show content.
      a.classList.add(ClassName.ACTIVE);
      content.classList.add(ClassName.SHOW);
      event.preventDefault();
    }

    static extractID(str) {
      let result = /([#])\S+/.exec(str);

      return (result == null) ? null : result[0];
    }
  }

  return Tab;
})();

export default Tab;
