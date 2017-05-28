import CosmosModule from '../lib/cosmos-module.js';
import Button from './button.js';

/************************************************************
  Chip
*************************************************************/
const NAME = 'chip';
const ClassName = {
  CHIP: 'chip',
};
const Selector = {
  CHIP: `.${ClassName.CHIP}`,
};
const Default = {
  tag: 'span', // chip's tagName. span, div, a ...
  close_button: true, // enable close button.
  close_action: 'remove', // close action. remove | hide
};

export default class Chip extends CosmosModule {
  constructor(container, option = {}) {
    super(option);
    this.container = document.querySelector(container);
    this.button = new Button({
      close_action: this.option.close_action,
    });
  }

  // static

  static get name() {
    return NAME;
  }

  // public

  /**
   * add
   *
   * @param {String} text
   * @param {String} imgSrc
   * @param {Object} data  dataset values.
   * @return {void}
   */
  add(text, imgSrc = '', data = {}) {
    let chip = this._createChip(text, imgSrc, data);

    this.container.appendChild(chip);
  }

  /**
   * removeAll
   *
   * @return {Number}
   */
  removeAll() {
    let chips = this.container.querySelectorAll(Selector.CHIP);
    let count = chips.length;

    for (let chip of chips) {
      this.container.removeChild(chip);
    }

    return count;
  }

  /**
   * getContainer
   *
   * @return {Element}
   */
  getContainer() {
    return this.container;
  }

  getDefaultOption() {
    return Default;
  }

  // private

  _createChip(text, imgSrc, data) {
    let chip = document.createElement(this.option.tag);

    // base.
    chip.classList.add(ClassName.CHIP);
    chip.textContent = text;

    // img.
    if (imgSrc) chip.appendChild(this._createImg(imgSrc));

    // dataset.
    for (let key in data) {
      if (key == 'href' && chip.tagName == 'A') {
        chip.href = data[key];
        continue;
      }

      chip.dataset[key] = data[key];
    }

    // close button.
    if (this.option.close_button) {
      this.button.appendBtnClose(chip);
    }

    return chip;
  }

  _createImg(src) {
    let img = document.createElement('img');
    img.src = src;
    return img;
  }
}
