// Canister Ids
const nnsCanisterId = 'qoctq-giaaa-aaaaa-aaaea-cai'

// Whitelist
const whitelist = [
  nnsCanisterId,
];

// Elements list
const els = {};

// Initialises the application listeners and handlers
function main() {
  els.btnTitle = document.querySelector('#btn-title')
  els.nnsStatsContainer = document.querySelector('#nns-stats-container');
  els.button = document.querySelector('#button-connect');
  els.button.addEventListener("click", onButtonPress);
}

// Button press handler
async function onButtonPress(el) {
  // Lock button events
  els.button.disabled = true;

  // Request for the Plug wallet connection
  // which returns a boolean response
  // the requestConnect should create an instance of agent
  const isConnected = await window.ic?.plug?.requestConnect({
    whitelist,
  });

  // Terminate on requestConnect permission refusal
  if (!isConnected) {
    els.btnTitle.textContent = "Plug wallet connection was refused";
    return;
  }

  // If truthy proceeds to the next step (request balance)
  // otherwise updates the button text with failure message
  els.btnTitle.textContent = "Plug wallet is connected";

  // Terminate on Agent initialisation failure
  if (!window.ic.plug?.agent) {
    els.btnTitle.textContent = "Oops! Failed to initialise the Agent...";
    return;
  }

  const NNSUiActor = await window.ic.plug.createActor({
    canisterId: nnsCanisterId,
    interfaceFactory: nnsUi,
  });

  // Terminate on NNS Actor initialisation failure
  if (!NNSUiActor) {
    els.btnTitle.textContent = "Oops! Failed to initialise the NNS Actor...";
    return;
  }

  const stats = await NNSUiActor.get_stats();
  console.log('NNS stats', stats);

  // Terminate on NNS get_stats failure
  if (!stats) {
    els.btnTitle.textContent = "Oops! Failed to get the NNS Stats...";
    return;
  }

  // Assign data to nodes
  els.nnsStatsContainer.querySelector('#accounts_count').textContent = Number(stats.accounts_count);
  els.nnsStatsContainer.querySelector('#transactions_count').textContent = Number(stats.transactions_count);
  els.nnsStatsContainer.querySelector('#sub_accounts_count').textContent = Number(stats.sub_accounts_count);

  // Display the nns stats container
  els.nnsStatsContainer.classList.remove('hidden');

  // Update with NNS status
  els.btnTitle.textContent = "Showing the NNS Stats";
}

function reset() {
  // Resets the state after 5 seconds
  setTimeout(() => {
    els.btnTitle.textContent = "Connect with Plug";
    // Unock button events
    els.button.disabled = false;
  }, 5000);
};

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);
