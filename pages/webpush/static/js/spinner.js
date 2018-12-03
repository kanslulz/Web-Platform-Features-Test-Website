
/**
 * Responsible for interacting with the Spinner.
 */
class Spinner {
  /**
   * @param {!HTMLElement} spinner The spinner.
   */
  constructor() {
    /** @const @private {!HTMLElement} */
    this.spinner_ = spinner;
  }

  /**
   * Hides the spinner.
   * @param {number} delay The delay in ms before hiding.
   */
  hide(delay) {
    setTimeout(() => this.spinner_.style.visibility = 'hidden', delay);
  }

  /**
   * Activates the spinner.
   */
  show() {
    this.spinner_.style.visibility = '';
  }
}

/**
 * @param {string} id The id of the spinner
 * @return {!Spinner}
 */
export function create(id) {
  const spinner = document.getElementById(id);
  if (!spinner) throw Error('Spinner not found');
  return new Spinner(spinner);
}
