import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';

/************************************************************
  Button
*************************************************************/
const Button = (() => {
  const NAME = 'Cosmos.Button';
  const ClassName = {
    CLOSE: 'btn-close',
    POSITION_CORNER: 'at-corner',
    HIDE: 'display-hide'
  };
  const Selector = {
    CLOSE: `.${ClassName.CLOSE}`
  };
  // default option.
  const Default = {
    close_action: 'remove', // remove | hide
    close_position: 'default', // default | corner
    close_style: 'default', // default | icon | circle_default | circle_icon
    close_content: {
      default: '✖'
    }
  };

  class Button extends CosmosModule{
    
    // static
    
    static get name() {
      return NAME;
    }

    static addBtnClose(element, option = {}) {
      let b = new Button(option);
      b.appendBtnClose(element);
    }

    // public
    
    appendBtnClose(element) {
      if (this._hasBtnClose(element)) {
        console.log('already has .btn-close');
        return;
      }
      let btnClose = this._createBtnClose();
      btnClose.addEventListener('click', this._btnCloseClickHandler.bind(this));
      element.appendChild(btnClose);
    }

    init() {
      // btn-close addEventListener.
      Util.eventOnSelector(Selector.CLOSE, 'click', this._btnCloseClickHandler.bind(this));
    }

    getDefaultOption() {
      return Default;
    }

    // private

    _btnCloseClickHandler(event) {
      let elm = event.currentTarget.parentNode;
      let parent = elm.parentNode;

      if (this.option.close_action == 'hide') {
        elm.classList.add(ClassName.HIDE);
      } else if (this.option.close_action == 'remove') {
        parent.removeChild(elm);
      }
    }

    _createBtnClose() {
      let btnClose = document.createElement('button');

      btnClose.classList.add(ClassName.CLOSE);
      if (this.option.close_position == 'corner') {
        btnClose.classList.add(ClassName.POSITION_CORNER);
      }
      btnClose.innerHTML = this.option.close_content[this.option.close_style];

      return btnClose;
    }

    _hasBtnClose(element) {
      if (element.querySelector(Selector.CLOSE)) {
        return true;
      } else {
        return false;
      }
    }
  }

  return Button;
})();

export default Button;
