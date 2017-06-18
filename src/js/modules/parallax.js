import CosmosModule from '../lib/cosmos-module.js';

/************************************************************
  Parallax
*************************************************************/
const NAME = 'Parallax';
const ClassName = {
  PARALLAX: 'parallax',
  HIDE: 'display-hide',
};

export default class Parallax extends CosmosModule {

  // static

  static get name() {
    return NAME;
  }

  static get isLoadable() {
    return true;
  }

  // public

  init() {
    let ps = document.querySelectorAll(`.${ClassName.PARALLAX}`);
    if (!ps.length) return;

    for (let p of ps) {
      this._process(p);
    }
  }

  // private

  _process(p) {
    let i = p.querySelector('img');
    if (!i) return;
    let h = p.dataset.height || i.clientHeight;

    // hide <img>
    i.classList.add(ClassName.HIDE);

    // set parallax background image.
    p.style.backgroundImage = `url('${i.src}')`;

    // set parallax height.
    p.style.height = `${h}px`;
  }
}
