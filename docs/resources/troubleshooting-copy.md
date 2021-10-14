---
date: "1"

---
# Troubleshooting

![](imgs/troubleshoot.png)

If you’re having trouble with Plug, this guide is meant to address common errors you may see while attempting to load NFTs, tokens, and other assets.

Please work through this guide before reaching out to support, the first thing our support team will send you is this troubleshooting guide. If you still have issues after trying these steps, contact us.

---
## I’m having trouble with **Tokens** in Plug.  

### Why is my ICP not showing but I can see the transaction on the activity page?

To begin troubleshooting, we’ll need to figure out what the error message is by checking background controller logs. To do this, we’ll access the Plug extension **Background Console**. 

#### How to access Plug’s Background Console? 

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

### Where can I get ICP and how do I transfer ICP to Plug?

You can purchase ICP on Binance, Coinbase, or any other exchange that has ICP listed. You transfer ICP by going to your exchange withdrawal page, selecting ICP, and withdrawing it to your Plug’s Account ID. 

You may find your Account ID by following the steps below:
On your Plug home page, click on “Deposit”
Click “Continue” with ICP as the selected asset.
Copy the “Account ID” to paste in the withdrawal field of the exchange you would like to transfer ICP from. 

((PlugWithdrawBinanceAccountID.GIF))

Congratulations, you have successfully transferred ICP from your exchange account to your Plug account. 

*Note: Most exchanges use Account ID instead of Principal ID to transfer ICP, to learn more about the difference between Account ID and Principal ID visit our [Internet Identities 101 article](https://medium.com/plugwallet/internet-computer-ids-101-669b192a2ace).* 

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq). 


## I’m having trouble with **NFTs** in Plug.  

### Why are my NFTs not showing up?

There’s a few reasons why NFTs could be not showing up in your Plug account. 

The NFT project is not supported by DAB.
DAB is down, unable to fetch the canister registry list for NFTs.  
The project’s NFT Canister is down.
The Internet Computer Subnet is down. 

To begin troubleshooting, we’ll need to figure out what the error message is by checking background controller logs. To do this, we’ll access the Plug extension **Background Console.** 
#### How to access Plug’s Background Console? 

Press the “Extensions” button in the top right corner of your browser. 
Click “Manage Extensions”
Enable “Developer Mode” in the top right corner of the “Manage Extensions” page. 
Finally, open the console by clicking “background page” next to “Inspect Views” on the Plug extension modal. 


![How to get to Background Console](https://storageapi.fleek.co/fleek-team-bucket/TroubleshootingPlugResources/PlugBackgroundConsoleGIF.gif)

You have successfully opened Plug’s Background Console, **please take note of the error** and continue with the troubleshooting guide below. 

#### If there is no error message, it’s possible the NFT Project is not supported by DAB - “NFT Project Not Supported Error”

To solve the problem, reach out to the NFT project team members and ask if they have integrated their NFT project with DAB. 

You may check the list of integrated DAB NFT projects [here.](https://github.com/Psychedelic/dab/blob/main/registries/nft/list.json) 

We’re always adding new projects & standards, reach out to us in Discord and request to get the project added to DAB. 

#### If there is an error with Canister ID “aipdg-waaaa-aaaah-aaq5q-cai” it means that DAB is down and unable to fetch the Canister Registry List for NFTs - “DAB Down Error”

Reach out to the DAB team in our Discord, in the #dab, #plug or #support channel. There’s nothing that can be done from your end as a user to resolve this issue.

Stay up-to-date with us on our Twitter for maintenance updates @plug_wallet & @dab_ooo or alternatively, join our Discord where an announcement will be posted as soon as the issue is resolved.  

#### If there is an error with the NFT project’s Canister ID, it means the project’s NFT Canister is down - “Canister Down Error”

To troubleshoot if the project’s NFT canister is down, follow the steps below: 

Visit the NFT project’s GitHub, Website, Discord, or reach out to one of their team members and find their Canister ID.
Compare their Canister ID to the errors in the Background Console error logs, if you see the same Canister ID, it means the project’s NFT Canister is down. 

There’s nothing that can be done directly from Plug to troubleshoot this issue, please contact the team of the asset/canister/NFT that isn’t loading for more information and wait for them to bring it back online.
#### If you are seeing 502/503/504 errors in the Background Console logs, it means the Internet Computer Subnet is down - “Subnet Down Error”

If nothing is loading or showing, you may receive the “Subnet Down” error message, this means that the Internet Computer is currently having some trouble processing requests to the subnet due to a variety of factors such as high traffic, performance upgrades, user throttling, etc.

There’s nothing Plug can do to resolve this issue, please wait until the subnet is brought back online & stay up-to-date with Internet Computer.

You may learn about the status of the Internet Computer here: 
https://status.internetcomputer.org/

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq). 


### How do I send my NFTs to Stoic Wallet or other wallets?
Plug makes sending NFTs very simple, to send your NFT to another IC wallet make sure the following conditions are met. 

The NFT Standard is supported. 
The wallet uses Principal ID. 

Once you have verified that these conditions are met, you may send NFTs by following the instructions below: 

Copy the Principal ID of the wallet you are attempting to send your NFT to. 
Click on the “NFTs” tab and select the NFT you wish to send. 
Click “Send” and paste the Principal ID of the wallet you wish to send to. 

**Once you click “Continue” the NFT will be sent to the other wallet.** Congratulations on sending your NFT successfully using Plug! ✈️

![How to send NFT to other wallet](https://storageapi.fleek.co/fleek-team-bucket/TroubleshootingPlugResources/SendNFTtoStoicWalletGIF.gif)



If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq). 

### How do I send or recieve my NFT to Plug from Stoic Wallet or other wallets? 
To send your NFT from another IC wallet make sure the following criteria is met:

The NFT Standard is supported in Plug. 
The wallet you are sending from uses Principal ID. 

Once you have verified the criteria above is met, you may simply **send your NFT to Plug by performing the following steps:**

Copy the Principal ID from Plug by clicking the top header. 
Select the NFT you wish to send from the other wallet. 
Paste your Principal ID, and press “Send” 

Congratulations, you have successfully sent your NFT from another wallet to Plug. We hope you decide to keep it in Plug 😉


![How to Send NFT to Plug](https://storageapi.fleek.co/fleek-team-bucket/TroubleshootingPlugResources/SendNFTtoPlugGIF.gif)

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq). 


### I was able to see my NFT in Plug earlier, but I cannot see it now?

If you were previously able to see your NFTs in Plug, but you cannot see them anymore, please refer to this “Why are my NFTs not showing up in Plug?” post.

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq). 


## I can see my NFT in Entrepot but not in Plug?

If you are able to see your NFTs in Entrepot, but you cannot see them in Plug, please refer to this “Why are my NFTs not showing up in Plug?” post.

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq). 

---

## I’m having trouble with **General Issues** in Plug.  

### What is the difference between Account IDs & Principal IDs?

If you would like to learn more about the difference between Account IDs & Principal IDs, please visit our [Internet Identities 101 article](https://medium.com/plugwallet/internet-computer-ids-101-669b192a2ace). 

If you still have questions regarding the differences between Account IDs & Principal IDs, please reach out to us in our Discord and we will have team members that can help clarify any confusion and answer any questions. You may find the link to our Discord [here](https://discord.gg/fleekhq).  


### Why aren’t my assets updating after a transaction?

If you just did a transaction and don’t see your assets update, ensure that you have waited at least 5 minutes before reaching out to support. This could just be **due to a latency issue delaying Plug from fetching your assets.**

If you have waited five minutes and still do not see your assets update, please ensure you aren’t dealing with the **“Clock Error”** you may troubleshoot by following the steps below. 

To begin troubleshooting, we’ll need to figure out what the error message is by checking background controller logs. To do this, we’ll access the Plug extension **Background Console.** 
#### How to access Plug’s Background Console? 

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


### I’m unable to see the secret recovery phrase after installing Plug?

If you cannot see your secret recovery phrase after installing Plug, please troubleshoot by following the steps below:

Manually remove the Plug extension.
Close and reopen your browser.
Reinstall the latest version of Plug extension on Chrome/Firefox.  

This should fix your issue and ensure you have the latest, non-corrupted version of Plug for your browser. 

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq). 


### Why has my Principal ID changed after installing the latest version of Plug?

This is due to our curve change, in effect as of Plug V0.2.1. Please follow our [curve migration guide](https://docs.plugwallet.ooo/resources/migrating-curve/) to learn about what happened and how to migrate our assets, thank you for your cooperation. 

If your issue persists or you have any questions regarding the curve change, please reach out to us in our Discord #plug channel which you can find [here](https://discord.gg/fleekhq).  

---

## I’m having trouble with the **IC Provider API** in Plug.  
### I click on “Connect with Plug” and it redirects me to the browser store? 

After installing Plug, make sure you refresh the browser before proceeding to connect to any apps. Try force refreshing by using “Ctrl + Shift + R” or closing and reopening the browser and then trying again to connect.

If your issue persists please reach out to us in the #support channel of our Discord with a short explanation of the error, your browser version, and your OS version so we can begin the troubleshooting process and help you resolve the issue. 

You may find the link to our Discord [here](https://discord.gg/fleekhq). 
