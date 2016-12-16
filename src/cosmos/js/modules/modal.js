/************************************************************
  Modal
*************************************************************/
const Modal = (() => {
  const NAME = 'Cosmos.Modal';

  var load = () => {
    // modal open button.
    let openBtns = document.querySelectorAll('button[data-toggle="modal"]');
    if (openBtns.length > 0) {
      for (let btn of openBtns) {
        btn.addEventListener('click', _modalOpenHandler);
      }
    }
    // modal close button.
    let closeBtns = document.querySelectorAll('.modal .modal-close');
    if (closeBtns.length > 0) {
      for (let btn of closeBtns) {
        btn.addEventListener('click', _modalCloseHandler);
      }
    }
    // window onclick.
    window.onclick = (event) => {
      if (event.target.classList.contains('modal')) {
        _modalHide(event.target);
      }
    };
    // If modal doesn't have close button, add it.
    let modals = document.querySelectorAll('.modal');
    if (modals.length > 0) {
      for (let m of modals) {
        _addCloseBtn(m);
      }
    }
  };

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
    if (!modal.classList.contains('show')) {
      modal.classList.add('show');
    }
  };

  var _modalHide = (modal) => {
    if (modal.classList.contains('show')) {
      modal.classList.remove('show');
    }
  };

  var _addCloseBtn = (modal) => {
    if (modal.querySelector('.modal-close')) { return; }
    let b = document.createElement('button');
    b.classList.add('modal-close');
    b.innerHTML = `<i class="fa fa-times" aria-hidden="true"></i>`;
    b.addEventListener('click', _modalCloseHandler);
    modal.querySelector('.modal-content').appendChild(b);
  };

  return {
    name: NAME,
    load: load
  };
})();

export default Modal;