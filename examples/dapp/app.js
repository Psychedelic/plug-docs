// Mock service
const timeout = 1200;
window.ic = {
  plug: {
    requestConnect: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
    requestBalance: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
    requestTransfer: async () => new Promise((resolve) => setTimeout(resolve.bind(null, true), timeout)),
  },
};

// Initialises the application listeners and handlers
function main() {

}

// Calls the Main function when the document is ready
document.addEventListener("DOMContentLoaded", main);