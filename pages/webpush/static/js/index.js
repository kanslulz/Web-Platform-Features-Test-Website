import {create as createSpinnerController} from './spinner.js';
  
window.addEventListener('load', setup);

function setup() {
  const spinnerController = createSpinnerController('spinner');
  spinnerController.hide(2000);
}
