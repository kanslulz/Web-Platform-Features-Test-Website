import * as controllers from './controllers.js';

window.addEventListener('load', setup);

// Useful globals.
let serviceWorkerReg = null;
let pushSubscription = null;

/**
 * Initial page setup.
 */
async function setup() {
  let prerequisites = true;
  // Install Service Worker.
  try {
    serviceWorkerReg = await navigator.serviceWorker.register(
        'static/js/sw.js', {scope: '/webpush/'});
    document.getElementById('sw-status').textContent = ' ✔️';
  } catch (e) {
    document.getElementById('sw-status').textContent = ' ✖️';
    prerequisites = false;
  }

  // Check Notifications Permission.
  Notification.requestPermission(() => {
    if (Notification.permission !== 'granted') {
      document.getElementById('notif-perm').textContent = ' ✖️';
      prerequisites = false;
    } else {
      document.getElementById('notif-perm').textContent = ' ✔️';
    }
  });

  if (!prerequisites) return;

  // Enable the button.
  document.getElementById('btn-create').addEventListener('click', handleClick);

  const pushSubscription = await serviceWorkerReg.pushManager.getSubscription();
  if (!pushSubscription) {
    document.getElementById('reg-status').textContent = 'No Registrations';
  }

  const spinnerController = new controllers.SpinnerController('spinner');
  spinnerController.hide(2000);
}

/**
 * Converts the public key into the format needed to create a subscription.
 * @param {string} base64String
 */
function urlBase64ToUint8Array(base64String) {
  const padding = '='.repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding)
      .replace(/\-/g, '+')
      .replace(/_/g, '/');

  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
  }
  return outputArray;
}

/**
 * Called when the create button is clicked.
 */
async function handleClick() {
  if (!pushSubscription) {
    // Create Push Subscription.
    pushSubscription = await serviceWorkerReg.pushManager.subscribe({
      userVisibleOnly: true,
      applicationServerKey: urlBase64ToUint8Array(
        'BBg9YJtNbfD5QX9eL_FQVUEZQQvpE2LlGdAszsgkhEOXP8yGtyyN_9ojok8pm2IuAsVsPcZwx23iPCC8f7MPNw4'
      )});
  }
  controllers.createPushSubscription(JSON.stringify(pushSubscription));
}
