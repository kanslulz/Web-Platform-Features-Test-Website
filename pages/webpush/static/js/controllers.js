
/**
 * Responsible for interacting with the Spinner.
 */
export class SpinnerController {
  /**
   * @param {string} id The id of the spinner.
   */
  constructor(id) {
    /** @const @private {!HTMLElement} */
    this.spinner_ = document.getElementById(id);
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
 * Responsible for showing the subscription status.
 */
export class SubscriptionController {
  constructor() {

  }
}