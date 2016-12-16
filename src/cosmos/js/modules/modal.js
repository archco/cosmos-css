/************************************************************
  Modal
*************************************************************/
const Modal = (() => {
  const NAME = 'Cosmos.Modal';
  const Selector = {
    OPEN: `button[data-toggle="modal"]`,
    CLOSE: '.modal .modal-close'
  };
  const ClassName = {
    MODAL: 'modal',
    CONTENT: 'modal-content',
    CLOSE: 'modal-close',
    SHOW: 'show'
  };
  const Config = {
    CLOSE_TEXT: `<i class="fa fa-times" aria-hidden="true"></i>`
  }

  // public

  var load = () => {
    // modal open button.
    let openBtns = document.querySelectorAll(Selector.OPEN);
    if (openBtns.length > 0) {
      for (let btn of openBtns) {
        btn.addEventListener('click', _modalOpenHandler);
      }
    }

    // modal close button.
    let closeBtns = document.querySelectorAll(Selector.CLOSE);
    if (closeBtns.length > 0) {
      for (let btn of closeBtns) {
        btn.addEventListener('click', _modalCloseHandler);
      }
    }
    
    // window onclick.
    window.addEventListener('click', (event) => {
      if (event.target.classList.contains(ClassName.MODAL)) {
        _modalHide(event.target);
      }
    });
    
    // If modal doesn't have close button, add it.
    let modals = document.querySelectorAll(`.${ClassName.MODAL}`);
    if (modals.length > 0) {
      for (let m of modals) {
        _addCloseBtn(m);
      }
    }
  };

  var dialog = (text) => {
    let m = document.createElement('div'); // modal
    let c = document.createElement('div'); // modal-content
    // modal-content
    c.classList.add(ClassName.CONTENT);
    c.textContent = text;
    // modal
    m.classList.add(ClassName.MODAL);
    m.appendChild(c);
    _addCloseBtn(m);
    document.body.appendChild(m);
    // show
    _modalShow(m);
  };

  // private

  var _modalCloseHandler = (event) => {
    let m = event.currentTarget.parentNode.parentNode;
    _modalHide(m);
  };

  var _modalOpenHandler = (event) => {
    let targetID = event.currentTarget.dataset.target;
    let t = document.querySelector(targetID);
    if (!t) { return; }

    _modalShow(t);
  };

  var _modalShow = (modal) => {
    if (!modal.classList.contains(ClassName.SHOW)) {
      modal.classList.add(ClassName.SHOW);
    }
  };

  var _modalHide = (modal) => {
    if (modal.classList.contains(ClassName.SHOW)) {
      modal.classList.remove(ClassName.SHOW);
    }
  };

  var _addCloseBtn = (modal) => {
    if (modal.querySelector(`.${ClassName.CLOSE}`)) { return; }
    let b = document.createElement('button');
    b.classList.add(ClassName.CLOSE);
    b.innerHTML = Config.CLOSE_TEXT;
    b.addEventListener('click', _modalCloseHandler);
    modal.querySelector(`.${ClassName.CONTENT}`).appendChild(b);
  };

  return {
    name: NAME,
    load: load,
    dialog: dialog
  };
})();

export default Modal;