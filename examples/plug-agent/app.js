// Canister Ids
const nnsId = 'qoctq-giaaa-aaaaa-aaaea-cai'

// Whitelist
const whitelist = [
  nnsId,
];

// Elements list
const els = {};

// Initialises the application listeners and handlers
function main() {
  els.btnTitle = document.querySelector('#btn-title')
  els.button = document.querySelector('#button-connect');
  els.button.addEventListener("click", onButtonPress);
}

// Button press handler
async function onButtonPress(el) {
  // Disables the button events (click)
  el.target.disabled = true;

  // Assigns the request for the Plug wallet connection
  // result value to `hasAllowed`
  const hasAllowed = await window.ic?.plug?.requestConnect();

  console.log('hasAllowed ->', hasAllowed);

  // Initialise agent
  // by passing a list of canister ids (whitelist)
  // the agent is then instantiated 
  // assigned as a property "agent" of window Plug object
  // window.ic.plug.agent
  await window?.ic?.plug?.createAgent(whitelist);

  console.log('agent ->', window.ic.plug.agent);

  // If truthy proceeds to the next step (request balance)
  // otherwise updates the button text with failure message
  if (hasAllowed) {
    els.btnTitle.textContent = "Plug wallet is connected";
  } else {
    els.btnTitle.textContent = "Plug wallet connection was refused";
  }
}

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);