// Initialises the application listeners and handlers
function main() {
  const button = document.querySelector('#button-connect');
  button.addEventListener("click", onButtonPress);
}

// Button press handler
async function onButtonPress(el) {
  // Disables the button events (click)
  el.target.disabled = true;

  // Assigns the request for the Plug wallet connection
  // result value to `hasAllowed`
  const hasAllowed = await window.ic?.plug?.requestConnect();
}

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);