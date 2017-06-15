import CosmosModule from '../lib/cosmos-module.js';
import Button from './button.js';
import eu from '../lib/element-util.js';

/************************************************************
  Modal
*************************************************************/
const NAME = 'modal';
const ClassName = {
  MODAL: 'modal',
  CONTENT: 'modal-content',
  CLOSE: 'btn-close',
  SHOW: 'show',
};
const Selector = {
  MODAL: `.${ClassName.MODAL}`,
  TRIGGER: `[data-trigger="modal"]`,
  CLOSE: `.${ClassName.MODAL} .${ClassName.CLOSE}`,
  CONTENT: `.${ClassName.CONTENT}`,
};
const ButtonOption = {
  close_position: 'corner',
  close_style: 'icon',
};
const Default = {
  trigger: '',
  target: '',
};

export default class Modal extends CosmosModule {
  constructor(option = {}) {
    super(option);
    this.button = new Button(ButtonOption);
    this.setTrigger(this.option.trigger);
    this.setTarget(this.option.target);
  }

  // static

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  static dialog(text) {
    let modal = new Modal();
    modal.makeDialog(text);
  }

  // public

  getDefaultOption() {
    return Default;
  }

  init() {
    // modal trigger button.
    eu.addListener(Selector.TRIGGER, 'click', this._triggerHandler.bind(this));

    // modal close button.
    eu.addListener(Selector.CLOSE, 'click', this._closeHandler.bind(this), true);

    // window onclick.
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains(ClassName.MODAL)) {
        this._modalHide(event.target);
      }
    });

    // If modal doesn't have close button, add it.
    let modals = document.querySelectorAll(Selector.MODAL);
    if (modals.length) {
      for (let modal of modals) {
        this._addCloseBtn(modal);
      }
    }
  }

  makeDialog(text) {
    let modal = document.createElement('div');
    let content = document.createElement('div');

    // modal-content
    content.classList.add(ClassName.CONTENT);
    content.textContent = text;

    // modal
    modal.classList.add(ClassName.MODAL);
    modal.appendChild(content);
    this._addCloseBtn(modal);
    document.body.appendChild(modal);

    // show
    this._modalShow(modal);
  }

  setTrigger(selector) {
    if (!selector) return;
    this.trigger = eu.getElement(selector);
    this.target = this._getTargetFromTrigger(this.trigger);
    return this;
  }

  setTarget(selector) {
    if (!selector) return;
    this.target = eu.getElement(selector);
    return this;
  }

  show() {
    this._modalShow(this.target);
  }

  hide() {
    this._modalHide(this.target);
  }

  toggle() {
    if (this._isShown(this.target)) {
      this.hide();
    } else {
      this.show();
    }
  }

  // private

  _closeHandler(event) {
    let modal = eu.findAncestor(event.currentTarget, Selector.MODAL);
    this._modalHide(modal);
    event.stopPropagation();
  }

  _triggerHandler(event) {
    let target = this._getTargetFromTrigger(event.currentTarget);
    if (!target) { return; }

    this._modalShow(target);
  }

  _modalShow(modal) {
    modal.classList.add(ClassName.SHOW);
  }

  _modalHide(modal) {
    modal.classList.remove(ClassName.SHOW);
  }

  _isShown(modal) {
    return modal.classList.contains(ClassName.SHOW);
  }

  _addCloseBtn(modal) {
    if (modal.querySelector(Selector.CLOSE)) return;
    let content = modal.querySelector(Selector.CONTENT);
    this.button.appendBtnClose(content, this._closeHandler.bind(this));
  }

  _getTargetFromTrigger(trigger) {
    let selector = trigger.getAttribute('href') || trigger.dataset.target || '';
    if (!selector) return;
    return eu.getElement(selector);
  }
}
