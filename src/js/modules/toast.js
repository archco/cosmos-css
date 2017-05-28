import CosmosModule from '../lib/cosmos-module.js';
import eu from '../lib/element-util.js';

/************************************************************
  Toast
*************************************************************/
const NAME = 'toast';
const ClassName = {
  TOAST: 'toast',
  SHOW: 'show',
  CONTAINER: 'toast-container',
};
const Default = {
  text: 'no text',
  duration_short: 3000,
  duration_long: 8000,
  container: `.${ClassName.CONTAINER}`,
  transition_duration: 600,
  log_enable: true,
  close_type: 'remove', // 'hide' or 'remove'
};

export default class Toast extends CosmosModule {
  constructor(option = {}) {
    super(option);

    // set defaults.
    this.setText(this.option.text);
    this.setDuration(this.option.duration_short);
    this.setContainer(this.option.container);
  }

  // static

  static get name() {
    return NAME;
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
    duration = duration || Default.duration_short;
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
    this.duration = duration;
    return this;
  }

  setContainer(selector) {
    let elm = eu.getElement(selector, eu.getElement('body'));
    if (!elm) {
      elm = document.createElement('DIV');
      elm.classList.add(ClassName.CONTAINER);
      eu.getElement('body').appendChild(elm);
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
