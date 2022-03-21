---
date: "1"
---
## 📡 Making Calls to Canisters with Plug

Once connected, you can use Plug to make proxied calls to a canister on behalf of your users. This is the main way **your app will be able to call actions on behalf of users**, like calling an update method on your app's BE canister to make a post (if it is a social media), or interact with an NFT collection's canister, etc.

1. First, connect to Plug and pass a whitelist of canisters you need to interact to.
2. The user will approve the connection, giving you access to the createActor method.
3. Use the createActor method to make safe calls to canisters on behalf of users.

!!! Important
    
    It is key to use the createActor to talk to a canister on behalf of users. Using the agent on its own, and creating an Actor on your end (without using Plug's method) will show users a warning when they need to approve update calls that affect their assets. This is considered an unsafe practice because it isn't fully transparent to users on the parameters you pass.

### createActor() - Making Safe Calls

createActor() is an [asynchronous](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous) method that creates an Actor to interact with the [Internet Computer](https://dfinity.org/). Returns an Actor for the provided Canister Id and interface factory ([Candid](https://sdk.dfinity.org/docs/candid-guide/candid-concepts.html) or [IDL](https://sdk.dfinity.org/docs/candid-guide/candid-concepts.html#_why_create_a_new_idl)).

The `createActor` expects that the Agent is initialized beforehand by calling the `requestConnect` method with the whitelist (canister ID string array) and the host (string).

As mentioned above, on instantiation the `Agent` is assigned to the window Plug object, as `window.ic.plug.agent`. Creating an Actor allows you to securely interact with a canister’s interface on behalf of the user. 

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

---

### ⚠️ How NOT to Make Canister Calls
Making calls on behalf of the user directly through the Plug Agent is not a suggested way to make calls. **That is why Plug has an exposed createActor method** shown above. 

If you bypass the createActor method and use the Agent to create an actor on your side; when that actor is sent to be signed by Plug it will show the user a warning, because Plug is not able to read all the arguments passed to that call, and considers it risky for the user to accept the action.

To learn more about what happens on both the user and developer side if you try to bypass the createActor( ) flow, [you can read this section of our documentation.](https://docs.plugwallet.ooo/resources/app-trust-and-security/)

### Plug Agent (.agent)

On instantiation (requestConnect with whitelist) the `Agent` is assigned to the window Plug object as:

```js
window.ic.plug.agent
```

The agent field is an instance of the **HttpAgent** class from the [@dfinity/agent](https://github.com/dfinity/agent-js) library, that allow us to interact with the Internet Computer.

!!! Important
    
    It's important to note that we are going to deprecate direct access to the agent in the near future, as developers should be using the CREATE ACTOR method to make calls to canisters through Plug. You can check the correspondent commit version for the latest interface, in accordance to the `dfinity/agent` version in [use](https://github.com/Psychedelic/plug-controller/blob/main/package.json).

Here's an example, of getting the user principal id:

```js
(async () => {
  // Canister Ids
  const nnsCanisterId = 'qoctq-giaaa-aaaaa-aaaea-cai'

  // Whitelist
  const whitelist = [
    nnsCanisterId,
  ];

  // Make the request
  const isConnected = await window.ic.plug.requestConnect({
    whitelist,
  });

  // Get the user principal id
  const principalId = await window.ic.plug.agent.getPrincipal();

  console.log(`Plug's user principal Id is ${principalId}`);
})();
```

----