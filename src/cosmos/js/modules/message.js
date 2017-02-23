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
  const Config = {
    CONTAINER: '#message-container',
    CLOSE_TEXT: `<i class="fa fa-times" aria-hidden="true"></i>`,
    CLOSE_CLASS: 'btn-close-message',
    BOX_CLASS: 'message-box'
  };

  class Message {

    // static
    
    static get name() {
      return NAME;
    }

    static load() {
      let m = new Message;
      m.init();
    }

    /**
     * add '.message-box' into '#message-container'
     * 
     * @param  {String} message
     * @param  {String} status  ['info','success','warning','error']
     */
    static showMessage(message, status = Status.INFO) {
      var c, b, span, btn;

      // create message box
      c = document.querySelector(Config.CONTAINER); // container
      b = document.createElement('DIV'); // message box
      span = document.createElement('SPAN'); // message text
      btn = document.createElement('BUTTON'); // close button
      span.textContent = message;
      btn.innerHTML = Config.CLOSE_TEXT;
      btn.classList.add(Config.CLOSE_CLASS);
      btn.addEventListener('click', Message._closeButtonHandler);
      b.classList.add(Config.BOX_CLASS);
      b.classList.add(status);
      // append child
      b.appendChild(span);
      b.appendChild(btn);
      c.appendChild(b);
    }

    static _closeButtonHandler(event) {
      let messageBox = event.currentTarget.parentNode;
      messageBox.style.opacity = '0';
      setTimeout(function () {
        messageBox.style.display = 'none';
      }, 600); // 0.6s
    }

    // public
    
    init() {
      // add event listener - close buttons
      Util.eventOnSelector(`.${Config.CLOSE_CLASS}`, 'click', Message._closeButtonHandler);
    }
  }

  return Message;
})();

export default Message;
