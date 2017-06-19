import CosmosModule from '../lib/cosmos-module.js';
import eu from '../lib/element-util.js';

/************************************************************
  Toast
*************************************************************/
const NAME = 'Toast';
const ClassName = {
  TOAST: 'toast',
  SHOW: 'show',
  CONTAINER: 'toast-container',
};
const Default = {
  text: 'no text', // set default text.
  duration: 'short', // toast duration. 'short'|'long'|integer number (ms)
  container_position: '', // nine-positions: top-left.. middle-center.. bottom-right..
  log_enable: true, // Enable console.log() when toast.show().
  close_type: 'remove', // 'hide' or 'remove'
  duration_short: 3000,
  duration_long: 8000,
  container: `.${ClassName.CONTAINER}`,
  transition_duration: 600,
};

export default class Toast extends CosmosModule {
  constructor(option = {}) {
    super(option);

    // set defaults.
    this.setText(this.option.text);
    this.setDuration(this.option.duration);
    this.setContainer(this.option.container);
  }

  // static

  static get name() {
    return NAME;
  }

  static get isFunctional() {
    return true;
  }

  /**
   * makeText
   *
   * @param  {String} text
   * @param  {Number} [ duration = null ]
   * @param  {Object} [ option = {} ]
   * @return {Toast}
   */
  static makeText(text, duration = null, option = {}) {
    let instance = new this(option);
    return instance.setText(text).setDuration(duration);
  }

  // public

  getDefaultOption() {
    return Default;
  }

  setText(text) {
    this.text = text;
    return this;
  }

  setDuration(duration) {
    if (typeof duration === 'string') {
      if (duration.toLowerCase() === 'long') {
        duration = this.option.duration_long;
      } else {
        duration = this.option.duration_short;
      }
    }

    this.duration = duration || this.option.duration_short;
    return this;
  }

  setContainer(selector) {
    let body = eu.getElement('body');
    let elm = eu.getElement(selector, body);

    if (!elm) {
      elm = document.createElement('DIV');
      elm.classList.add(ClassName.CONTAINER);
      body.appendChild(elm);
    }

    if (this.option.container_position) {
      elm.classList.add(this.option.container_position);
    }

    this.container = elm;
    return this;
  }

  show() {
    let toast = this._makeToast();
    if (this.option.log_enable) this._log(); // log

    toast.classList.add(ClassName.SHOW);
    setTimeout(() => {
      toast.classList.remove(ClassName.SHOW);
      setTimeout(() => {
        if (this.option.close_type === 'remove') {
          this.container.removeChild(toast); // remove.
        } else {
          eu.hide(toast); // hide.
        }
      }, this.option.transition_duration);
    }, this.duration);
  }

  // private

  _makeToast() {
    let div = document.createElement('DIV');
    div.textContent = this.text;
    div.classList.add(ClassName.TOAST);
    this.container.appendChild(div);
    return div;
  }

  _log() {
    let date = new Date().toString();
    console.log(`ToastLog[${date}]: ${this.text}`);
  }
}
