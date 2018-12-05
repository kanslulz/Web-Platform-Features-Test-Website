window.addEventListener('load', setup);

let serviceWorkerReg = null;

/**
 * Initial page setup.
 */
async function setup() {
  let prerequisites = true;
  // Install Service Worker.
  try {
    // TODO(kanslulz): Add a scope.
    serviceWorkerReg =
        await navigator.serviceWorker.register('static/js/sw.js');
  } catch (e) {
    console.log('Failed to register');
  }

  window.addEventListener('message', event => console.log(event.data));
  serviceWorkerReg.sync.register('lel');
}