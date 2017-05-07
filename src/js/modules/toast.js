import CosmosModule from '../lib/cosmos-module.js';
import eu from '../lib/element-util.js';

/************************************************************
  Toast
*************************************************************/
const NAME = 'Cosmos.Toast';
const ClassName = {
  TOAST: 'toast',
  SHOW: 'show',
  CONTAINER: 'toast-container'
};
const Default = {
  text: 'no text',
  duration_short: 3000,
  duration_long: 8000,
  base: `.${ClassName.CONTAINER}`,
  transition_time: 600,
  log_enable: true,
  close_type: 'hide', // 'hide' or 'remove'
};

export default class Toast extends CosmosModule {
  constructor(option = {}) {
    super(option);
    // set defaults.
    this.setText(this.option.text);
    this.setDuration(this.option.duration_short);
    this.setBase(this.option.base);
  }

  // static

  static get name() {
    return NAME;
  }

  static makeText(text, duration = null) {
    duration = duration || Default.duration_short;
    let instance = new this();
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
    this.duration = duration;
    return this;
  }

  setBase(selector) {
    let elm = eu.getElement(selector, eu.getElement('body'));
    if (!elm) {
      elm = document.createElement('DIV');
      elm.classList.add(ClassName.CONTAINER);
      eu.getElement('body').appendChild(elm);
    }
    this.base = elm;
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
          this.base.removeChild(toast); // remove.
        } else {
          eu.hide(toast); // hide.
        }
      }, this.option.transition_time);
    }, this.duration);
  }

  // private

  _makeToast() {
    let div = document.createElement('DIV');
    div.textContent = this.text;
    div.classList.add(ClassName.TOAST);
    this.base.appendChild(div);
    return div;
  }

  _log() {
    let date = new Date().toString();
    console.log(`ToastLog[${date}]: ${this.text}`);
  }
}
