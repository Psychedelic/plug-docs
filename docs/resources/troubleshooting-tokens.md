---
date: "1"

---
# Troubleshooting - Tokens

![](imgs/trob-tok.png)

If you’re having trouble with Plug, this guide is meant to address common errors related to tokens in your wallet.

Please work through this guide before reaching out to support, the first thing our support team will send you is this troubleshooting guide. If you still have issues after trying these steps, contact us.

**For issues with other topics, see:**

1. [Troubleshooting Issues with NFTs.](https://docs.plugwallet.ooo/resources/troubleshooting-nfts/)
2. [Troubleshooting General Issues.](https://docs.plugwallet.ooo/resources/troubleshooting-general/)

---

## My ICP is not showing but I can see the transaction on activity?

To begin troubleshooting, we’ll need to figure out what the error message is by checking background controller logs. To do this, we’ll access the Plug extension **Background Console**. 

### How to access Plug’s Background Console

Press the “Extensions” button in the top right corner of your browser. 
Click “Manage Extensions”
Enable “Developer Mode” in the top right corner of the “Manage Extensions” page. 
Finally, open the console by clicking “background page” next to “Inspect Views” on the Plug extension modal. 

![How to get to Background Console](https://storageapi.fleek.co/fleek-team-bucket/TroubleshootingPlugResources/PlugBackgroundConsoleGIF.gif)

You have successfully opened Plug’s Background Console, **please take note of the error** and continue with the troubleshooting guide below.


### Code 400: Specified ingress_expiry not within expected range - “Clock Error”

The NNS ledger is very strict about requests to the ledger and when they expire. There’s a known error - if your clock on your Windows/MacOS/Mobile device is not set to time zone updating “automatically” and is out of sync, the NNS ledger will reject your query to check your assets.

**To solve the “Clock Error” in Plug, follow the troubleshooting steps below:** 

Visit your device time/date settings.
Make sure that the time zone is set to “automatically”.
That’s it! Restart your browser, and Plug should show all your assets.

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq).

---

### Canister Down Error: The Asset's Canister is Unavailable

If you are receiving the “Canister Down” error while for example visiting the Assets tab and not seeing your balances it might be due to the Token's or projects canister being down. 

There’s nothing that can be done directly from Plug to troubleshoot this issue, please contact the team who developed the token that isn’t loading for more information and wait for them to bring it back online.

---

### Subnet Down Error: The Subnet where the Asset Lives is Down

If nothing is loading or showing, you may receive the “Subnet Down” error message, this means that the Internet Computer is currently having some trouble processing requests to the subnet due to a variety of factors such as high traffic, performance upgrades, user throttling, etc.

There’s nothing Plug can do to resolve this issue, please wait until the subnet is brought back online & stay up-to-date with Internet Computer. 

You may learn about the status of the Internet Computer here: https://status.internetcomputer.org/

--- 

## Where can I get ICP and how do I transfer ICP to Plug?

You can purchase ICP on Binance, Coinbase, or any other exchange that has ICP listed. You transfer ICP by going to your exchange withdrawal page, selecting ICP, and withdrawing it to your Plug’s Account ID. 

You may find your Account ID by following the steps below:

1. On your Plug home page, click on “Deposit”
2. Click “Continue” with ICP as the selected asset.
3. Copy the “Account ID”.
4. Paste that ID in the withdrawal field of the exchange.


*Note: Most exchanges use Account ID instead of Principal ID to transfer ICP, to learn more about the difference between Account ID and Principal ID visit our [Internet Identities 101 article](https://medium.com/plugwallet/internet-computer-ids-101-669b192a2ace).*.

---
## My issue still persists or is not covered here!

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq).