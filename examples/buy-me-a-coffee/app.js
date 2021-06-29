// Mock service
const timeout = 1200;
window.ic = {
  plug: {
    requestConnect: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
    requestBalance: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
    requestTransfer: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
  },
};

const coffeeAmount = 0.1;

// Initialises the application listeners and handlers
function main() {
  const button = document.querySelector('#buy-me-coffee');
  button.addEventListener("click", onButtonPress);
}

// Button press handler
async function onButtonPress(el) {
  el.target.disabled = true;

  const hasAllowed = await window.ic?.plug?.requestConnect();

  if (hasAllowed) {
    el.target.textContent = "Plug wallet is connected"

    const balance = await window.ic?.plug?.requestBalance();

    if (balance >= coffeeAmount) {
      el.target.textContent = "Plug wallet has enough balance"

      const requestTransferArg = {
        accountId: 'xxxxx',
        amount: coffeeAmount,
      };
      const transfer = await window.ic?.plug?.requestTransfer(requestTransferArg);

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

  setTimeout(() => {
    el.target.disabled = false;
    el.target.textContent = "Buy me a coffee"
  }, 5000);
}

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);