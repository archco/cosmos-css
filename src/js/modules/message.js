import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';

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
  // default option.
  const Default = {
    close_text: `<i class="fa fa-times" aria-hidden="true"></i>`,
  };
  const ClassName = {
    CLOSE: 'btn-close-message',
    BOX: 'message-box'
  };
  const Selector = {
    CONTAINER: '#message-container',
    CLOSE: `.${ClassName.CLOSE}`,
    BOX: `.${ClassName.BOX}`
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
      Util.eventOnSelector(Selector.CLOSE, 'click', this._closeButtonHandler);
    }

    show(message, status = Status.INFO) {
      var c, b, span, btn;

      // create message box
      c = document.querySelector(Selector.CONTAINER); // container
      b = document.createElement('DIV'); // message box
      span = document.createElement('SPAN'); // message text
      btn = document.createElement('BUTTON'); // close button

      span.textContent = message;
      btn.innerHTML = this.option.close_text;
      btn.classList.add(ClassName.CLOSE);
      btn.addEventListener('click', this._closeButtonHandler);
      b.classList.add(ClassName.BOX);
      b.classList.add(status);

      // append child
      b.appendChild(span);
      b.appendChild(btn);
      c.appendChild(b);
    }

    getDefaultOption() {
      return Default;
    }

    // private
    
    _closeButtonHandler(event) {
      let messageBox = Util.findAncestor(event.currentTarget, Selector.BOX);
      messageBox.style.opacity = '0';
      setTimeout(function () {
        messageBox.style.display = 'none';
      }, 600); // 0.6s
    }
  }

  return Message;
})();

export default Message;
