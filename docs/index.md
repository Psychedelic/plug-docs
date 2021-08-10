---
date: "1"
---

![](imgs/plug-welcome.png)

Welcome to Plug's developer documentation. Learn how to integrate Plug into Internet Computer applications to provide **seamless onboardings and transactions with a user's Principal ID wallet**.

Plug is a browser crypto wallet and identity/authentication provider for the Internet Computer, compatible with ICP, and soon with cycles and any Internet Computer token. **[Read our blog to learn all about it!](https://medium.com/plugwallet)**


- Visit [our website](https://plugwallet.ooo) to get Plug's latest version.
- Visit our community and jam with the team in our [Discord](https://discord.gg/yVEcEzmrgm)
- Follow us on Twitter to stay updated with [Plug's development](https://twitter.com/plug_wallet).

**Download Plug from browser stores or GitHub**
- [Chrome & Chromium: Extension Store](https://chrome.google.com/webstore/detail/plug/cfbfdhimifdmdehjmkdobpcjfefblkjm)
- [Firefox: Add-on Store](https://addons.mozilla.org/en-US/firefox/addon/plug/)
- [GitHub: All Releases](https://github.com/Psychedelic/plug/releases)

!!! Important

    Plug is currently in Alpha V0.2.1, and is in active development. This version of Plug includes ICP wallet features, basic app-integration/interactions with the IC Provider API, and the PlugAgent for authentication and canister call signing. Consider Plug a hot wallet during its alpha stage, and feel free to contact us via Discord/Twitter to report any issues, enhancement ideas or bugs. Coming next? Cycles integration!

## Migrating Wallet Funds from V0.2.0 to V0.2.1.

**As of V0.2.1, Plug migrated its curve from Ed25519 to SECP256K1**. This means that the cryptographic curve used to import/create identities in Plug (e.g. the curve used to calculate your Principal ID from your seed phrase) is changing.

**Users with a wallet created in Plug V0.2.0 or before need to create a new wallet in this Plug version and migrate their funds**, because they can’t import their old wallet (since the curve change, the seed phrase would output a different Principal ID/key pair).

[Here is a detailed guide on how to do it, and why we did this one-time change.](https://docs.plugwallet.ooo/resources/migrating-curve/)

**If you had no funds in your Plug wallet yet, you can skip this process and just create a new wallet.**


## Plug's Repositories
Review Plug's code, submit proposals, or submit issues for the team to review.

- [Plug Extension](https://github.com/Psychedelic/plug)
- [Plug Controller](https://github.com/Psychedelic/plug-controller)
- [Plug Inpage Provider](https://github.com/Psychedelic/plug-inpage-provider)

## Why Plug? What is different?
Plug aims to solve several points of friction on the Internet Computer for both developers and users.

**For users?** It means having one main wallet (your Principal ID) in your browser to manage all your assets (Cycles/ICP/tokens, NFT's, etc.) and to log into any IC app. No need to worry about having separate wallets for different apps and tokens, or having multiple identities per device/app (like you would when using Internet Identity).

- Log into IC apps from your browser in one click using the same Principal ID.
- Manage, send and receive all your IC assets from one place, with one ID.
- Save contacts (aka name ID's) in a local storage address book. 


**For developers?** It will help offer seamless web/app experiences on the Internet Computer, handling authentication and wallet connection for their users. The same experience a Dapp user would expect on Ethereum, but built for the Internet Computer.

- Authenticate users, and their balances, in one click with just a Principal ID.
- Trigger transfers or transaction requests to user's wallets from apps.
- Query and display a user's balances in the app.