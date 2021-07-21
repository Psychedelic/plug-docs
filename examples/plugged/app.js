// Elements list
const els = {};

// Initialises the application listeners and handlers
function main() {
  // Assign elements to the elements list
  els.btnConnect = document.querySelector('#btn-connect');
  els.btnIsConnected = document.querySelector('#btn-is-connected');
  els.btnRequestBalance = document.querySelector('#btn-request-balance');
  els.btnRequestTransfer = document.querySelector('#btn-request-transfer');
  els.output = document.querySelector('#output');

  // Initialise click listener for buttons
  Object
    .values(els)
    .filter((el) => el.nodeName === 'BUTTON')
    .forEach((el) => el.addEventListener(
        'click',
        onButtonPressHandler
      )
    )
}

// Button press handler
function onButtonPressHandler(el) {
  const name = el.target.id;

  switch(name) {
    case 'btn-connect':
      onBtnConnect();
      break;
    case 'btn-is-connected':
      onBtnIsConnected();
      break;
    case 'btn-request-balance':
      onBtnRequestBalance();
      break;
    case 'btn-request-transfer':
      onBtnRequestTransfer();
      break;
    default:
      outputWrite('Button not found!');
  };
}

// On button press connect handler
async function onBtnConnect() {
  outputWrite('onBtnConnect() call');
  const response = await window.ic?.plug?.requestConnect();
  outputWrite(`onBtnConnect() call response ${response}`);
}

// On button press is connected handler
async function onBtnIsConnected() {
  outputWrite('onBtnIsConnected() call');
  const response = await window.ic?.plug?.isConnected();
  outputWrite(`onBtnIsConnected() call response ${response}`);
}

// On button press request balance handler
async function onBtnRequestBalance() {
  outputWrite('onBtnRequestBalance() call');
  const response = await window.ic?.plug?.requestBalance();
  outputWrite(`onBtnRequestBalance() call response ${JSON.stringify(response)}`);
}

// On button press request transfer handler
async function onBtnRequestTransfer() {
  outputWrite('onBtnRequestTransfer() call');
  const requestTransferArg = {
    to: 'xxxx-xxxx-xxxx-xxxx-xxxx', // replace by valid Principal ID
    amount: 0, // the amount in e8s (fractional unit of ICP)
  };
  const response = await window.ic?.plug?.requestTransfer(requestTransferArg);
  outputWrite(`onBtnRequestTransfer() call response ${JSON.stringify(response)}`);
}

// Write to the output DOM element
function outputWrite(text) {
  els.output.textContent += (els.output.textContent ? `\n` : '') + `> ${text}`;
  els.output.scrollTop = els.output.scrollHeight;
}

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);