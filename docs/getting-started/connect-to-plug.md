---
date: "1"
---
# Integrate Plug

![](imgs/integrate.png)

## Browser extension

Interacting with the [Plug](https://plugwallet.ooo/) browser extension is made simple by the IC Provider API, an API that Plug injects into websites to allow them to call Plug and interact with the extension.

Get started by adding the extension in the browser, or if you already done so make sure that is enabled in the "extensions" or "Add-ons" menu of your browser!

Pin the Plug extension to the browser bar for easy access (here's an example of how to do it in [Chrome](https://support.google.com/chrome_webstore/answer/2664769?hl=en-GB)).

Once the [Plug](https://plugwallet.ooo/) extension is installed, a `Plug` object is available as a property of `window.ic` in the browser window or tabs. Your application will be able to detect the extension by checking the `window` object and if available, interact with it!

## Console playground

Once you have the Plug extension, run a quick test to detect it by opening the browser developer console (here's an example for [Chrome](https://developer.chrome.com/docs/devtools/open/) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console)). Note that if you just installed Plug you need to **refresh the page (F5 on Windows)** so that Plug is detected correctly.

Copy and paste the following code snippet into the console and execute it by pressing the `ENTER` key of your keyboard.

```js
window.ic.plug && "Plug and play!"
```

The result output should be `Plug and play!`, if you have Plug installed correctly!

If you get an `error`, you're advised to check the installation instructions for [Plug](https://plugwallet.ooo/) and ensure that you have the extension installed correctly!

## Plug window object

Plug provides a simple API to websites and webapps at `window.ic.plug`, enabling them to "talk to" the Internet computer via Plug.

As we continue to develop features and make them available, the API will let you:

- Detect the Plug extension
- Interact and authenticate an account
- Query data from the Internet Computer
- Trigger a transaction for the end-user approval

As previously noted, we can interact directly with the API through our browser developer console.

Copy and paste the following code snippet into the console and execute it:

```js
window.ic.plug.requestConnect()
```

!!! Important

    Because of browser security restrictions, access to the Plug extension API is only allowed from pages accessed via HTTP/HTTPS. For example, you'd be allowed to interact with it from the current [documentation URL](https://docs.plugwallet.ooo/getting-started/connect-to-plug/), but not the default options page `chrome-extension://xxxx/options.html`.

A `Plug notification` window will pop-up, displaying the options to `Allow` or `Decline` the connection to the user wallet:

![](imgs/app-connection.jpg){: style="max-width:360px"}

After you `Allow` or `Decline`, the notification popup will close!

To understand how to read the response data for the `requestConnect` call and any other [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) method, read below.

## Available interactions and methods

### requestConnect(RequestConnectParams?)

requestConnect() is an [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) method to request a new connection by showing a pop-up to the Plug user, that resolves to Boolean: `true` or `false` based on the users response.

As an example, copy and paste the following code snippet into the console and execute it.

Select `Allow` or `Decline` in the pop-up and to see the corresponding result (Allowed or Declined) in the console.

```js
(async () => {
  const result = await window.ic.plug.requestConnect();
  const connectionState = result ? "allowed" : "denied";
  console.log(`The Connection was ${connectionState}!`);
})();
```

Optionally, you can pass the following parameters to integrate Plug's Agent features, for authenticating a user's identity and requesting access to the Plug Agent to sign requests to your canisters on behalf of that identity.

The fields are:

  - whitelist - an Array of Canister Ids of type string
  - host - a string representing a network URL that when not set defaults to the `mainnet.dfinity.network`

This is how it looks:

```js
Object {
  whitelist?: ['canister-id'],
  host?: 'https://network-address',
}
```

Here's an hypotetical example:

```js
(async () => {
  // Canister Ids
  const nnsCanisterId = 'qoctq-giaaa-aaaaa-aaaea-cai'

  // Whitelist
  const whitelist = [
    nnsCanisterId,
  ];

  // Host
  const host = "https://mainnet.dfinity.network";

  // Make the request
  const result = await window.ic.plug.requestConnect({
    whitelist,
    host,
  });

  const connectionState = result ? "allowed" : "denied";
  console.log(`The Connection was ${connectionState}!`);
})();
```

You can learn more about this and use a template button implementation by reading our [Plug button](/getting-started/plug-button) guide! A ready-to-go "Connect to Plug" button for your app.

### isConnected()

isConnected() is an [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) method to check the connection status, that returns a Boolean: `true` or `false`.

```js
(async () => {
  const result = await window.ic.plug.isConnected();
  console.log(`Plug connection is ${result}`);
})()
```
### window.ic.plug.agent

On instantiation the `Agent` is assigned to the window Plug object, as `window.ic.plug.agent`. It returns an instance of the http agent class from the agent-js.

```js
window.ic.plug.agent
```

You can see the definition of the object here:

```js
class HttpAgent implements Agent {
    private readonly _pipeline;
    private readonly _identity;
    private readonly _fetch;
    private readonly _host;
    private readonly _credentials;
    private _rootKeyFetched;
    rootKey: BinaryBlob;
    constructor(options?: HttpAgentOptions);
    addTransform(fn: HttpAgentRequestTransformFn, priority?: number): void;
    getPrincipal(): Promise<Principal>;
    call(canisterId: Principal | string, options: {
        methodName: string;
        arg: BinaryBlob;
        effectiveCanisterId?: Principal | string;
    }, identity?: Identity | Promise<Identity>): Promise<SubmitResponse>;
    query(canisterId: Principal | string, fields: QueryFields, identity?: Identity | Promise<Identity>): Promise<QueryResponse>;
    readState(canisterId: Principal | string, fields: ReadStateOptions, identity?: Identity | Promise<Identity>): Promise<ReadStateResponse>;
    status(): Promise<JsonObject>;
    fetchRootKey(): Promise<BinaryBlob>;
    protected _transform(request: HttpAgentRequest): Promise<HttpAgentRequest>;
}
```

### createActor()

createActor() is an [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) method that creates an Actor to interact with the [Internet Computer](https://dfinity.org/). Returns an Actor for the provided Canister Id and interface factory ([Candid](https://sdk.dfinity.org/docs/candid-guide/candid-concepts.html) or [IDL](https://sdk.dfinity.org/docs/candid-guide/candid-concepts.html#_why_create_a_new_idl)).

The `createActor` expects that the Agent is initialised beforehand by calling the `requesConnect` method with the whitelist (canister ID string array) and the host (string).

As mentioned above, on instantiation the `Agent` is assigned to the window Plug object, as `window.ic.plug.agent`.

```js
(async () => {
  // NNS Canister Id as an example
  const nnsCanisterId = 'qoctq-giaaa-aaaaa-aaaea-cai'
  const whitelist = [nnsCanisterId];

  // Initialise Agent, expects no return value
  await window?.ic?.plug?.requestConnect({
    whitelist,
  });

  // A partial Interface factory
  // for the NNS Canister UI
  // Check the `plug authentication - nns` for more
  const nnsPartialInterfaceFactory = ({ IDL }) => {
    const BlockHeight = IDL.Nat64;
    const Stats = IDL.Record({
      'latest_transaction_block_height' : BlockHeight,
      'seconds_since_last_ledger_sync' : IDL.Nat64,
      'sub_accounts_count' : IDL.Nat64,
      'hardware_wallet_accounts_count' : IDL.Nat64,
      'accounts_count' : IDL.Nat64,
      'earliest_transaction_block_height' : BlockHeight,
      'transactions_count' : IDL.Nat64,
      'block_height_synced_up_to' : IDL.Opt(IDL.Nat64),
      'latest_transaction_timestamp_nanos' : IDL.Nat64,
      'earliest_transaction_timestamp_nanos' : IDL.Nat64,
    });
    return IDL.Service({
      'get_stats' : IDL.Func([], [Stats], ['query']),
    });
  };

  // Create an actor to interact with the NNS Canister
  // we pass the NNS Canister id and the interface factory
  const NNSUiActor = await window.ic.plug.createActor({
    canisterId: nnsCanisterId,
    interfaceFactory: nnsPartialInterfaceFactory,
  });

  // We can use any method described in the Candid (IDL)
  // for example the get_stats()
  // See https://github.com/dfinity/nns-dapp/blob/cd755b8/canisters/nns_ui/nns_ui.did
  const stats = await NNSUiActor.get_stats();
  console.log('NNS stats', stats);
})()
```

### requestBalance()

requestBalance() is an [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) method to request the user's ICP wallet balance, which is consulted in the [Internet Computer's Ledger Canister](https://sdk.dfinity.org/docs/integration/ledger-quick-start.html#_ledger_canister_overview) for ICP, returning the amount of ICP the user's wallet in Plug holds.

The response data is an array, otherwise throws an error:

```js
Array [{
  amount: number,
  currency: string,
  image: string,
  name: string,
  value: number,
}]
```

As an example, copy and paste the following code snippet into the console and execute it.

```js
(async () => {
  const result = await window.ic.plug.requestBalance();
  console.log(result);
})();
```

### requestTransfer(RequestTransferParams)

requestTransfer() is an [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) method to request a new transfer processed in the Internet Computer [Ledger Canister](https://sdk.dfinity.org/docs/integration/ledger-quick-start.html#_ledger_canister_overview), which takes the parameter `RequestTransferParams` that is an object of fields:

RequestTransferParams:

- to
- amount (an e8s value)
- opts (SendOpts)

SendOpts (optional):

- fee
- memo
- from_subaccount
- created_at_time (TimeStamp)

TimeStamp (optional):

- timestamp_nanos

As in:

```js
Object {
  to: String,
  amount: BigInt,
  opts?: {
    fee?: BigInt,
    memo?: BigInt,
    from_subaccount?: Number,
    created_at_time?: {
      timestamp_nanos: BigInt
    },
  },
}
```

As an example, copy and paste the following code snippet into the console and execute it (replacing the `xxxx-xxxx-xxxx-xxxx` with a valid `Principal ID`):

```js
(async () => {
  const params = {
    to: 'xxxxx-xxxxx-xxxxx-xxxxx',
    amount: 2_000_000,
  };
  const result = await window.ic.plug.requestTransfer(params);
  console.log(result);
})();
```

The response data structure, otherwise throws an error:

```js
Object {
  height: Number
}
```

It's a good practice to check the original [source-code](https://github.com/Psychedelic/plug-controller/blob/main/src/utils/dfx/rosetta.ts#L49) to see the latest type definitions.


## Conclusion

We're currently working hard to bring more features and plan to release them as soon as they become ready. The project is open-source and you are very welcome to participate or follow the progress!

Hope you enjoyed the read so far and got a basic understanding of how to integrate Plug to your site/app or interact with it.