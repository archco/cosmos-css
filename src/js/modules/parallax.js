import CosmosModule from '../lib/cosmos-module.js';

/************************************************************
  Parallax
*************************************************************/
const NAME = 'Cosmos.Parallax';
const ClassName = {
  PARALLAX: 'parallax',
  HIDE: 'display-hide'
};

class Parallax extends CosmosModule {

  // static
  
  static get name() {
    return NAME;
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
    i.classList.add(ClassName.HIDE);
    // set parallax background image.
    p.style.backgroundImage = `url('${i.src}')`;
    // set parallax height.
    p.style.height = `${h}px`;
  }
}

export default Parallax;
