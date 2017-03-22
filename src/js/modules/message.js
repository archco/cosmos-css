import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';
import Button from './button.js';

/************************************************************
  message
*************************************************************/
const Message = (() => {
  const NAME = 'Cosmos.Message';
  const Status = {
    INFO: 'info',
    SUCCESS: 'success',
    WARNING: 'warning',
    ERROR: 'error',
    DANGER: 'danger',
    PRIMARY: 'primary',
    SECONDARY: 'secondary'
  };
  const ClassName = {
    CLOSE: 'btn-close',
    BOX: 'message-box'
  };
  const Selector = {
    CONTAINER: '#message-container',
    BOX: `.${ClassName.BOX}`,
    CLOSE: `.${ClassName.BOX} .${ClassName.CLOSE}`
  };

  class Message extends CosmosModule {

    // static
    
    static get name() {
      return NAME;
    }

    /**
     * add '.message-box' into '#message-container'
     * 
     * @param  {String} message
     * @param  {String} status  ['info','success','warning','error']
     */
    static showMessage(message, status = Status.INFO) {
      let m = new Message;
      m.show(message, status);
    }

    // public
    
    init() {
      // add event listener - close buttons
      Util.eventOnSelector(Selector.CLOSE, 'click', this._closeButtonHandler, true);
    }

    show(message, status = Status.INFO) {
      var c, b, span;

      // create message box
      c = document.querySelector(Selector.CONTAINER); // container
      b = document.createElement('DIV'); // message box
      span = document.createElement('SPAN'); // message text
      
      span.textContent = message;
      b.classList.add(ClassName.BOX);
      b.classList.add(status);

      // append child
      b.appendChild(span);
      Button.addBtnClose(b, {
        close_position: 'right_middle',
        close_style: 'icon'
      }, this._closeButtonHandler);
      c.appendChild(b);
    }

    // private
    
    _closeButtonHandler(event) {
      let messageBox = Util.findAncestor(event.currentTarget, Selector.BOX);
      
      messageBox.style.opacity = '0';
      setTimeout(function () {
        messageBox.style.display = 'none';
      }, 600); // 0.6s
      event.stopPropagation();
    }
  }

  return Message;
})();

export default Message;
