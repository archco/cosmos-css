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
    POSITION_RIGHT_MIDDLE: 'at-right-middle',
    HIDE: 'display-hide',
    REMOVEABLE: 'removeable',
    HIDEABLE: 'hideable'
  };
  const Selector = {
    CLOSE: `.${ClassName.CLOSE}`,
    HAS_ACTION: `.${ClassName.CLOSE}.${ClassName.REMOVEABLE}, .${ClassName.CLOSE}.${ClassName.HIDEABLE}`
  };
  // default option.
  const Default = {
    close_init_enable: true,
    close_action: 'remove', // remove | hide
    close_position: 'default', // default | corner | right_middle
    close_style: 'default', // default | icon | circle_default | circle_icon
    close_content: {
      default: '✖',
      icon: `<i class="fa fa-times" aria-hidden="true"></i>`
    }
  };

  class Button extends CosmosModule{
    
    // static
    
    static get name() {
      return NAME;
    }

    static addBtnClose(element, option = {}, callback = null) {
      let b = new Button(option);
      b.appendBtnClose(element, callback);
    }

    // public
    
    appendBtnClose(element, callback = null) {
      if (this._hasBtnClose(element)) {
        console.log('already has .btn-close');
        return;
      }
      let btnClose = this._createBtnClose();
      let handler = callback || this._btnCloseClickHandler;

      btnClose.addEventListener('click', handler.bind(this));
      element.appendChild(btnClose);
    }

    init() {
      // btn-close addEventListener.
      if (this.option.close_init_enable) {
        Util.eventOnSelector(Selector.HAS_ACTION, 'click', this._btnCloseClickHandler.bind(this));
      }
    }

    getDefaultOption() {
      return Default;
    }

    // private

    _btnCloseClickHandler(event) {
      let btnClose = event.currentTarget;
      let element = btnClose.parentNode;
      let parent = element.parentNode;
      let action = this._getActionType(btnClose);

      if (action == 'hide') {
        element.classList.add(ClassName.HIDE);
      } else if (action == 'remove') {
        parent.removeChild(element);
      }
      event.preventDefault();
    }

    _createBtnClose() {
      let btnClose = document.createElement('button');

      btnClose.classList.add(ClassName.CLOSE);
      if (this.option.close_position == 'corner') {
        btnClose.classList.add(ClassName.POSITION_CORNER);
      } else if (this.option.close_position == 'right_middle') {
        btnClose.classList.add(ClassName.POSITION_RIGHT_MIDDLE);
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

    _getActionType(btnClose) {
      if (btnClose.classList.contains(ClassName.REMOVEABLE)) {
        return 'remove';
      } else if (btnClose.classList.contains(ClassName.HIDEABLE)) {
        return 'hide';
      } else {
        return this.option.close_action;
      }
    }
  }

  return Button;
})();

export default Button;
