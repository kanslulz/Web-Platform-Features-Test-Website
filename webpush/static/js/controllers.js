
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
 * Responsible for creating a new push subscription.
 * @param {string} serializedPushSubscription
 */
export async function createPushSubscription(serializedPushSubscription) {
  const urlParams = new URLSearchParams();
  const days = [];
  for (const day of document.getElementsByClassName('checkbox-day')) {
    if (!day.checked) continue;
    days.push(day.id.substr('day-'.length));
  }
  urlParams.set('days', days.join(''));
  urlParams.set('time', document.getElementById('time-picker').value);
  urlParams.set('tz', new Date().getTimezoneOffset());
  urlParams.set('nb', document.getElementById('notif-body').value);
  urlParams.set('ps', serializedPushSubscription);

  const response = await fetch(`createsubscription?${urlParams.toString()}`);
  console.log(await response.text());
}

/**
 * Responsible for showing the subscription status.
 */
export class SubscriptionController {
  constructor() {

  }
}