window.addEventListener('load', setup);

let serviceWorkerReg = null;

/**
 * Initial page setup.
 */
async function setup() {
  const logController = await import('./log.js').then(m => m.logController);

  // Install Service Worker.
  try {
    serviceWorkerReg = await navigator.serviceWorker.register(
        'static/js/sw.js', {scope: '/backgroundsync/'});
    logController.addUpdate('Registered Service Worker C:');
  } catch (e) {
    logController.addUpdate('Failed to register Service Worker :C');
    return;
  }

  navigator.serviceWorker.addEventListener('message', event => logController.addUpdate(event.data));

  const syncHandler = await import('./sync.js').then(m => m.createHandler(serviceWorkerReg.sync));
  syncHandler.createSync();

  const button = document.getElementsByClassName('btn')[0];
  button.addEventListener('click', () => syncHandler.createSync());
}