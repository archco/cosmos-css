/************************************************************
  AJAX-loading
*************************************************************/

(function () {
  var a = document.querySelector('#ajax-loading');
  if (! a) { return; }

  // append loader element.
  appendLoader(a);
  // Register callback to jquery ajax.
  $(document)
    .ajaxStart(function () {
      if (! a.classList.contains('show')) {
        a.classList.add('show');
      }
    })
    .ajaxStop(function () {
      if (a.classList.contains('show')) {
        a.classList.remove('show');
      }
    });

  function appendLoader(a) {
    var loader = document.createElement('div');
    loader.classList.add('loader');
    a.appendChild(loader);
  }
})();