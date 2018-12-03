import {create as createSpinnerController} from './spinner.js';

window.addEventListener('load', setup);

// Useful globals.
let serviceWorkerReg = null;

/**
 * Initial page setup.
 */
async function setup() {
  // Install Service Worker.
  try {
    // TODO(kanslulz): Add a scope.
    serviceWorkerReg =
        await navigator.serviceWorker.register('static/js/sw.js');
    document.getElementById('sw-status').textContent = ' ✔️';
  } catch (e) {
    document.getElementById('sw-status').textContent = ' ✖️';
  }

  // Check Notifications Permission.
  Notification.requestPermission(() => {
    if (Notification.permission !== 'granted') {
      document.getElementById('notif-perm').textContent = ' ✖️';
    } else {
      document.getElementById('notif-perm').textContent = ' ✔️';
    }
  });

  const spinnerController = createSpinnerController('spinner');
  spinnerController.hide(2000);
}
