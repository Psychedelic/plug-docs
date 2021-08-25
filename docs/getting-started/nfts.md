---
date: "1"
---
# NFTs in Plug

![](imgs/nfts.png)

As of V0.3.1, we've added the **NFTs Tab** in your main assets view! With Plug, you will be able view the NFTs held/owned by your Principal ID (currently only compatible ones), view a specific NFT's details and attributes, and send them through Plug's UI to a different Principal ID.

## ICPunks & Bulding New NFT Standards

Currently Plug only supports the [ICPunks collection](https://icpunks.com/), the only automatically surfaced and supported NFT. You can redeem it with your Plug wallet, tied to your Principal ID.

We will roll out support for auto-surfacing other NFTs as a community-standard is further developed and matured, as well as we continue to develop a registry/list open internet service for Tokens, NFTs, and Dapps, to help improve discoverability [(DAB - Learn More)](https://dab.ooo/)

### Why Start Here?

The ecosystem still needs to push and develop a conjoint NFT standard interface, and **we are supporting ICPunk’s early NFT standard proposal as a step in the right direction**. Why do we support it?

- [Main Repository](https://github.com/stopak/ICPunks)
- [Standard Interface](https://github.com/stopak/ICPunks/blob/dev/service/icpunks_rust.did)

In contrast to other standards on the Internet Computer for NFTs the direction ICPunks has taken with their NFT standard takes an important leap: the trading and exchange features that would usually be covered by marketplaces **(listing for sale, view listed tokens, purchases) are built into the NFT contract/canister itself** 🤯

That means no more marketplace-specific assets, or walled NFT gardens. All NFTs using this standard are interface/marketplace agnostic, and could be listed or traded anywhere. The NFT collection itself is its own marketplace and listing. For us, that is the next necessary leap for NFTs 😎

Again, as we said, it’s early. This standard has to be discussed, and has to evolve into a community-effort, but we see the current interface implementation as a solid base layer to build upon, and that we will support as a standard going forward.

## Viewing NFT Details & Sending an NFT
In the Plug interface, you will now see the new NFTs tab!

![](imgs/nft-empty.png)

If your wallet's Principal ID owns a compatible NFT (like ICPunks) Plug will auto-surface your owned assets in a list.

![](imgs/nft-full.png)

If you **click on one of your NFTs** you will enter the **details view**, where you can see the NFT's specific attributes, the collection's details, and more information.

Here you can also use the Marketplace button to view the asset on a marketplace (if available), or **use the SEND button** to transfer your NFT to a different Principal ID.

![](imgs/nft-details.png)

Want to send an NFT you own to someone else? It is as easy as entering that person's Principal ID, and hitting send. Plug will handle the rest.

![](imgs/nft-send.png)
