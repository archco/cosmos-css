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
  OPEN: `button[data-toggle="modal"]`,
  CLOSE: `.${ClassName.MODAL} .${ClassName.CLOSE}`,
  CONTENT: `.${ClassName.CONTENT}`,
};
const ButtonOption = {
  close_position: 'corner',
  close_style: 'icon',
};

export default class Modal extends CosmosModule {
  constructor(option = {}) {
    super(option);
    this.button = new Button(ButtonOption);
  }

  // static

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  static dialog(text) {
    let m = new Modal();
    m.makeDialog(text);
  }

  // public

  init() {
    // modal open button.
    eu.addListener(Selector.OPEN, 'click', this._modalOpenHandler.bind(this));

    // modal close button.
    eu.addListener(Selector.CLOSE, 'click', this._modalCloseHandler.bind(this), true);

    // window onclick.
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains(ClassName.MODAL)) {
        this._modalHide(event.target);
      }
    });

    // If modal doesn't have close button, add it.
    let modals = document.querySelectorAll(Selector.MODAL);
    if (modals.length) {
      for (let m of modals) {
        this._addCloseBtn(m);
      }
    }
  }

  makeDialog(text) {
    let m = document.createElement('div'); // modal
    let c = document.createElement('div'); // modal-content

    // modal-content
    c.classList.add(ClassName.CONTENT);
    c.textContent = text;

    // modal
    m.classList.add(ClassName.MODAL);
    m.appendChild(c);
    this._addCloseBtn(m);
    document.body.appendChild(m);

    // show
    this._modalShow(m);
  }

  // private

  _modalCloseHandler(event) {
    let m = eu.findAncestor(event.currentTarget, Selector.MODAL);
    this._modalHide(m);
    event.stopPropagation();
  }

  _modalOpenHandler(event) {
    let targetID = event.currentTarget.dataset.target;
    let t = document.querySelector(targetID);
    if (!t) { return; }

    this._modalShow(t);
  }

  _modalShow(modal) {
    if (!modal.classList.contains(ClassName.SHOW)) {
      modal.classList.add(ClassName.SHOW);
    }
  }

  _modalHide(modal) {
    if (modal.classList.contains(ClassName.SHOW)) {
      modal.classList.remove(ClassName.SHOW);
    }
  }

  _addCloseBtn(modal) {
    if (modal.querySelector(Selector.CLOSE)) { return; }

    let content = modal.querySelector(Selector.CONTENT);
    this.button.appendBtnClose(content, this._modalCloseHandler.bind(this));
  }
}
