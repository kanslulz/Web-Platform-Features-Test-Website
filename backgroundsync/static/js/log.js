/**
 * Responsible for displaying updates on the page.
 */
class LogController {
  constructor() {
    /** @const @private {!HTMLElement} */
    this.log_ = document.getElementsByClassName('log')[0];
  }
  
  /**
   * @param {string} update The update to display.
   */
  addUpdate(update) {
    this.log_.insertAdjacentHTML(
        'beforeend', `<p><strong>${Date.now()}: </strong>${update}</p>`);
  }

  /**
   * Clear the log statements.
   */
  clear() {
    this.log_.innerHTML = '';
  }
}

export const logController = new LogController();
