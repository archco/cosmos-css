/************************************************************
  Parallax
*************************************************************/
const Parallax = (() => {
  const NAME = 'Cosmos.Parallax';
  const ClassName = {
    PARALLAX: 'parallax',
    HIDE: 'hide'
  };

  var load = () => {
    let ps = document.querySelectorAll(`.${ClassName.PARALLAX}`);
    if (ps.length == 0) { return; }

    for (let p of ps) {
      _process(p);
    }
  };

  var _process = (p) => {
    let i = p.querySelector('img');
    if (!i) { return; }
    let h = p.dataset.height || i.clientHeight;
    // hide <img>
    i.classList.add('hide');
    // set parallax background image.
    p.style.backgroundImage = `url('${i.src}')`;
    // set parallax height.
    p.style.height = `${h}px`;
  };

  return {
    name: NAME,
    load: load
  };
})();

export default Parallax;
