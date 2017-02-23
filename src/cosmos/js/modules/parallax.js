/************************************************************
  Parallax
*************************************************************/
const Parallax = (() => {
  const NAME = 'Cosmos.Parallax';
  const ClassName = {
    PARALLAX: 'parallax',
    HIDE: 'hide'
  };

  class Parallax {

    // static
    
    static get name() {
      return NAME;
    }

    static load() {
      let p = new Parallax;
      p.init();
    }

    // public
    
    init() {
      let ps = document.querySelectorAll(`.${ClassName.PARALLAX}`);
      if (ps.length == 0) { return; }

      for (let p of ps) {
        this._process(p);
      }
    }

    // private
    
    _process(p) {
      let i = p.querySelector('img');
      if (!i) { return; }
      let h = p.dataset.height || i.clientHeight;
      // hide <img>
      i.classList.add('hide');
      // set parallax background image.
      p.style.backgroundImage = `url('${i.src}')`;
      // set parallax height.
      p.style.height = `${h}px`;
    }
  }

  return Parallax;
})();

export default Parallax;
