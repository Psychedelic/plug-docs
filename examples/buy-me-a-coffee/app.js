// Mock service
const timeout = 1200;
window.ic = {
  plug: {
    requestConnect: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
    requestBalance: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
    requestTransfer: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
  },
};

// Coffee amount in e8s
const coffeeAmount = 0.1;

// Initialises the application listeners and handlers
function main() {
  const button = document.querySelector('#buy-me-coffee');
  button.addEventListener("click", onButtonPress);
}

// Button press handler
async function onButtonPress(el) {
  // Disables the button events (click)
  el.target.disabled = true;

  // Assigns the request for the Plug wallet connection
  // result value to `hasAllowed`
  const hasAllowed = await window.ic?.plug?.requestConnect();

  // If truthy proceeds to the next step (request balance)
  // otherwise updates the button text with failure message
  if (hasAllowed) {
    // Updates the button text
    el.target.textContent = "Plug wallet is connected"

    // Assigns the request balance result value to balance
    const balance = await window.ic?.plug?.requestBalance();

    // Check if the current balance is at least the coffee cost
    // for the example only, we have not considered gas fees (in cycles)
    // If truthy proceeds to the next step (request transfer)
    // otherwise updates the button text with failure message
    if (balance >= coffeeAmount) {
      // Updates the button text
      el.target.textContent = "Plug wallet has enough balance"

      // The argument that we'll pass on requestTransfer call
      const requestTransferArg = {
        accountId: 'xxxxx',
        amount: coffeeAmount,
      };

      // Assigns the request transfer result value to transfer
      const transfer = await window.ic?.plug?.requestTransfer(requestTransferArg);

      // On transfer, we update the button text
      // in accordance to the transfer state (success or failure)
      if (transfer) {
        el.target.textContent = `Plug wallet transferred ${coffeeAmount}`;
      } else {
        el.target.textContent = "Plug wallet failed to transfer";
      }
    } else {
      el.target.textContent = "Plug wallet doesn't have enough balance";
    }
  } else {
    el.target.textContent = "Plug wallet connection was refused";
  }

  // reset to initial state
  // after 5 seconds
  setTimeout(() => {
    el.target.disabled = false;
    el.target.textContent = "Buy me a coffee"
  }, 5000);
}

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);