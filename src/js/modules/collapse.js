import CosmosModule from '../lib/cosmos-module.js';
import eu from '../lib/element-util.js';

/************************************************************
  Collapse
*************************************************************/
const ClassName = {
  TOGGLE: 'collapse-toggle',
  PANNEL: 'collapse-panel',
  ACTIVE: 'active',
  SHOW: 'show',
  ACCORDION: 'accordion',
  A_HEAD: 'accordion-head',
  A_BODY: 'accordion-body',
};
const Selector = {
  TOGGLE: `.${ClassName.TOGGLE}`,
  ACCORDION: `.${ClassName.ACCORDION}`,
  A_HEAD: `.${ClassName.ACCORDION} .${ClassName.A_HEAD}`,
  C_ACTIVE: `.${ClassName.TOGGLE}.${ClassName.ACTIVE}`,
  A_ACTIVE: `.${ClassName.ACCORDION} .${ClassName.A_HEAD}.${ClassName.ACTIVE}`,
};
const Default = {
  element: null,
  target: '',
  is_collapsed: true, // initial state.
};

export default class Collapse extends CosmosModule {
  constructor(option = {}) {
    super(option);
    this.setElement(this.option.element);
  }

  // static

  static get isLoadable() {
    return true;
  }

  static get isFunctional() {
    return true;
  }

  // public

  getDefaultOption() {
    return Default;
  }

  init() {
    // collapse toggle listener
    eu.addListener(Selector.TOGGLE, 'click', this._collapseToggleHandler.bind(this));

    // accordion head listener
    eu.addListener(Selector.A_HEAD, 'click', this._accordionHeadHandler.bind(this));

    // Handle on activated collapse and accordion.
    this._activatedCollapse();
    this._activatedAccordion();
  }

  /**
   * initialize on this.element.
   *
   * @return {void}
   */
  on() {
    eu.addListener(this.element, 'click', () => {
      this._toggle(this.element, this.target);
    });

    if (this.option.is_collapsed) {
      this.hide();
    } else {
      this.show();
    }
  }

  /**
   * show element's target.
   *
   * @return {void}
   */
  show() {
    this._show(this.element, this.target);
  }

  /**
   * hide element's target.
   *
   * @return {void}
   */
  hide() {
    this._hide(this.element, this.target);
  }

  /**
   * set element property.
   *
   * @param {String|Element} element
   * @return {Collapse}
   */
  setElement(element) {
    this.element = element ? eu.getElement(element) : element;
    this.target = this.option.target
      ? eu.getElement(this.option.target)
      : this._getTarget(this.element);

    if (this.target && !this.target.classList.contains(ClassName.PANNEL)) {
      this.target.classList.add(ClassName.PANNEL);
    }

    return this;
  }

  // private

  _toggle(element, target) {
    if (element.classList.contains(ClassName.ACTIVE)) {
      this._hide(element, target);
    } else {
      this._show(element, target);
    }
  }

  _show(element, target) {
    element.classList.add(ClassName.ACTIVE);
    target.style.maxHeight = target.scrollHeight + 'px';
  }

  _hide(element, target) {
    element.classList.remove(ClassName.ACTIVE);
    target.style.maxHeight = null;
  }

  _collapseToggleHandler(event) {
    let element = event.currentTarget;
    let target = this._getTarget(element);

    this._toggle(element, target);
  }

  _accordionHeadHandler(event) {
    let head = event.currentTarget;
    let body = head.nextElementSibling;
    let accordion = eu.findAncestor(head, Selector.ACCORDION);

    if (head.classList.contains(ClassName.ACTIVE)) {
      this._toggle(head, body);
    } else {
      this._allClose(accordion);
      this._toggle(head, body);
    }
  }

  _allClose(accordion) {
    let heads = accordion.querySelectorAll(Selector.A_HEAD);
    for (let head of heads) {
      if (head.classList.contains(ClassName.ACTIVE)) {
        let body = head.nextElementSibling;
        this._hide(head, body);
      }
    }
  }

  _activatedCollapse() {
    // Collapse can multiple active.
    let elements = document.querySelectorAll(Selector.C_ACTIVE);
    if (!elements.length) return;

    for (let element of elements) {
      let target = this._getTarget(element);
      this._show(element, target);
    }
  }

  _activatedAccordion() {
    // Only one accordion can be active at a time. After all, only the last one will be activated.
    let heads = document.querySelectorAll(Selector.A_ACTIVE);
    if (!heads.length) return;

    for (let head of heads) {
      let accordion = eu.findAncestor(head, Selector.ACCORDION);
      this._allClose(accordion);
      head.click();
    }
  }

  _getTarget(element) {
    if (!element) return null;
    return eu.getElement(element.dataset.target);
  }
}
