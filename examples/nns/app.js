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
  // Assigns the request for the Plug wallet connection
  // result value to `hasAllowed`
  const hasAllowed = await window.ic?.plug?.requestConnect();

  console.log('hasAllowed ->', hasAllowed);

  // Terminate on requestConnect permission refusal
  if (!hasAllowed) {
    els.btnTitle.textContent = "Plug wallet connection was refused";
    return;
  }

  // If truthy proceeds to the next step (request balance)
  // otherwise updates the button text with failure message
  els.btnTitle.textContent = "Plug wallet is connected";

  // Initialise agent
  // by passing a list of canister ids (whitelist)
  // the agent is then instantiated 
  // assigned as a property "agent" of window Plug object
  // e.g. window.ic.plug.agent
  await window?.ic?.plug?.createAgent(whitelist);

  console.log('agent ->', window.ic.plug.agent);

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
  }

  // Assign data to nodes
  els.nnsStatsContainer.querySelector('#accounts_count').textContent = Number(stats.accounts_count);
  els.nnsStatsContainer.querySelector('#transactions_count').textContent = Number(stats.transactions_count);
  els.nnsStatsContainer.querySelector('#sub_accounts_count').textContent = Number(stats.sub_accounts_count);

  // Display the nns stats container
  els.nnsStatsContainer.classList.remove('hidden');
}

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);
