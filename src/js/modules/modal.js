import CosmosModule from '../lib/cosmos-module.js';
import Util from '../lib/util.js';
import Button from './button.js';

/************************************************************
  Modal
*************************************************************/
const NAME = 'Cosmos.Modal';
const ClassName = {
  MODAL: 'modal',
  CONTENT: 'modal-content',
  CLOSE: 'btn-close',
  SHOW: 'show'
};
const Selector = {
  MODAL: `.${ClassName.MODAL}`,
  OPEN: `button[data-toggle="modal"]`,
  CLOSE: `.${ClassName.MODAL} .${ClassName.CLOSE}`,
  CONTENT: `.${ClassName.CONTENT}`
};
const ButtonOption = {
  close_position: 'corner',
  close_style: 'icon'
};

class Modal extends CosmosModule {
  constructor(option = {}) {
    super(option);
    this.button = new Button(ButtonOption);
  }

  // static
  
  static get name() {
    return NAME;
  }

  static dialog(text) {
    let m = new Modal;
    m.makeDialog(text);
  }

  // public
  
  init() {
    // modal open button.
    Util.eventOnSelector(Selector.OPEN, 'click', this._modalOpenHandler.bind(this));

    // modal close button.
    Util.eventOnSelector(Selector.CLOSE, 'click', this._modalCloseHandler.bind(this), true);

    // window onclick.
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains(ClassName.MODAL)) {
        this._modalHide(event.target);
      }
    });
    
    // If modal doesn't have close button, add it.
    let modals = document.querySelectorAll(Selector.MODAL);
    if (modals.length > 0) {
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
    let m = Util.findAncestor(event.currentTarget, Selector.MODAL);
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

export default Modal;
