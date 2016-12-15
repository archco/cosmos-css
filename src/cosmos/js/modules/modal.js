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
        btn.addEventListener('click', (e) => {
          let m = e.currentTarget.parentNode.parentNode;
          _modalHide(m);
        });
      }
    }
    // window onclick.
    window.onclick = (event) => {
      if (event.target.classList.contains('modal')) {
        _modalHide(event.target);
      }
    };
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

  return {
    name: NAME,
    load: load
  };
})();

export default Modal;