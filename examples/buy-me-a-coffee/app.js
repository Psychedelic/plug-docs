// Receiver's account id
const receiverAccountId = 'qupdo-e6jjk-iivru-zud7h-h7lrp-6aaix-cujev-3mrbh-qrrfr-dl5v4-xae';

// Coffee amount in e8s
// fractional units of ICP tokens
// For example, 0.2 ICP is 20_000_000 e8s.
const coffeeAmount = 4_000_000;

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
    el.target.textContent = "Plug wallet is connected";

    // Assigns the request balance result value to balance
    const requestBalanceResponse = await window.ic?.plug?.requestBalance();

    console.log('requestBalanceResponse', requestBalanceResponse);

    // Pick the balance value for the first account
    const balance = requestBalanceResponse[0].value;

    // Check if the current balance is at least the coffee cost
    // for the example only, we have not considered gas fees (in cycles)
    // If truthy proceeds to the next step (request transfer)
    // otherwise updates the button text with failure message
    if (balance > 0) {
      console.log('bp1');

      // Updates the button text
      el.target.textContent = "Plug wallet has enough balance";

      console.log('bp2');

      // The argument that we'll pass on requestTransfer call
      const requestTransferArg = {
        to: receiverAccountId,
        amount: coffeeAmount,
      };

      console.log('bp3');

      // Update the button text
      // while waiting for the `requestTransfer` to complete
      setTimeout(() => {
        el.target.textContent = "Loading...";
      }, 3000);

      // Assigns the request transfer result value to transfer
      const transfer = await window.ic?.plug?.requestTransfer(requestTransferArg);

      console.log('transfer', transfer);

      // Does a basic verification
      // which checks if the transfer response has a match
      // and verifies that is of status `COMPLETED`
      const hasSuccessfulTransfer = transfer?.transactions?.transactions[0]?.amount == requestTransferArg.amount
        && transfer?.transactions?.transactions[0]?.status == 'COMPLETED';

      // On transfer, we update the button text
      // in accordance to the transfer state (success or failure)
      if (hasSuccessfulTransfer) {
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
  }, 8000);
}

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);