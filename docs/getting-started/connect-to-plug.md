---
date: "1"
---
# Integrate Plug

![](imgs/integrate.png)

## Browser extension

Plug integration is made easy because of the [Plug](https://plugwallet.ooo/) browser extension!

Get started by adding the extension in the browser, or if you already done so make sure that is enabled!

Pin the Plug extension to the browser bar for easy access (here's an example of how to do it in [Chrome](https://support.google.com/chrome_webstore/answer/2664769?hl=en-GB)).

Once the [Plug](https://plugwallet.ooo/) extension is installed, a `Plug` object is available as a property of `window.ic` in the browser window or tabs. Your application will be able to detect the extension by checking the `window` object and if available, interact with it!

## Console playground

Once you have the Plug extension, run a quick test to detect it by opening the browser developer console (here's an example for [Chrome](https://developer.chrome.com/docs/devtools/open/) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console)).

Copy and paste the following code snippet into the console and execute it by pressing the `ENTER` key of your keyboard.

```js
window.ic.plug && "Plug and play!"
```

The result output should be `Plug and play!`, if you have Plug installed correctly!

If you get an `error`, you're advised to check the installation instructions for [Plug](https://plugwallet.ooo/) and ensure that you have the extension installed correc!

## Plug window object

Plug provides a simple API to websites and webapps at `window.ic.plug`, enabling them to "talk to" the Internet computer via Plug.

The API lets you:

- Detect the Plug extension
- Interact and authenticate an account
- Query data from the Internet Computer
- Trigger a transaction for the end-user approval

As previously noted, we can interact direclty with the API through our browser developer console.

Copy and paste the following code snippet into the console and execute it!

```js
window.ic.plug.requestConnect()
```

A `Plug notification` window will pop-up, displaying the following interface that requesting the user to `Allow` or `Decline` the connection to their wallet:

![](imgs/app-connection.jpg){: style="max-width:360px"}

The `requestConnect` is an asynchronous method that awaits for the user response, in which returns `true` or `false`, for the connection request.

As an example, copy and paste the following code snippet into the console and execute it.

Select `Allow` or `Decline` on the pop-up and you should see the correspondant result in the console.

```js
(async () => {
  const result = await window.ic.plug.requestConnect();
  const connectionState = result ? "allowed" : "denied";
  console.log(`The Connection was ${connectionState}!`);
})();
```

Alternatively, call the method `isConnected` of `Plug` window object, which returns the `connection` state has a `boolean` value: `true` or `false`.

```js
(async () => {
  const result = await window.ic.plug.isConnected();
  console.log(`Plug connection is ${result}`);
})()
```

At time of writing the following API methods are available to use:

- **requestConnect()** - A method to request a new connection by showing a pop-up to the Plug user, that returns Boolean: true or false
- **isConnected()** - A convenience method to check the connection status, that returns a Boolean: true or false
- **connectedApps** - An Array of string values of connected applications
- **requestTransfer(Transfer)** - A method to request a new Transfer processed in the Internet Computer [Ledger Canister](https://sdk.dfinity.org/docs/integration/ledger-quick-start.html#_ledger_canister_overview), which takes the parameter `Transfer` that is an object of fields: account id, amount and optionals fee and memo. It'll return the [block height](https://medium.com/dfinity/achieving-consensus-on-the-internet-computer-ee9fbfbafcbc) as a [BigInt](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt), otherwise throws an error when unauthorized or on invalid argument.

```js
Object {
  accountId: String,
  amount: BigInt,
  fee?: BigInt,
  memo?: Number,
}
```
- **requestBalance()** - A method to request the account Balance in the [Ledger Canister](https://sdk.dfinity.org/docs/integration/ledger-quick-start.html#_ledger_canister_overview), in that returns a fractional units of ICP tokens, called [e8s](https://sdk.dfinity.org/docs/token-holders/self-custody-quickstart.html) or an error when unauthorized.

We're currently working hard to bring more features and plan to release them as soon as they become ready. The project is open-source and you are very welcome to participate or follow the progress!

Hope you enjoyed the read this far and got a basic understanding of how to connect to Plug.