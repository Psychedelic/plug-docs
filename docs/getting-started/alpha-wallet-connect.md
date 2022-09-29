---
date: "1"
---

![](imgs/balances-transactions.png)

## Plug Mobile Auth Alpha

In order to add mobile authentication to Plug, we've created a custom implementation of the WalletConnect messaging protocol. 

Let's dive into how to integrate it for existing and new applications. If at any point you find yourself stuck, our team of devs would be happy to help in our [Discord](https://discord.gg/yVEcEzmrgm) (join the #plug channel!).

!!! Warning
     This **alpha** version of Plug Mobile auth is aimed toward the developers to have time to test how the integration works and make the (minor) changes needed to make it work with their dApps. We expect to find problems with the implementation, if you are a user make sure to use the alpha mobile application at your own discretion.

### Introduction

The alpha Plug Mobile auth comes with 3 packages: 

- [**Alpha Android APK**](https://play.google.com/apps/testing/co.psychedelic.plug) - the updated Android application that can talk using Wallet Connect.
- [**Alpha In-Page Provider**](https://github.com/Psychedelic/plug-inpage-provider) - a new in-page provider specially designed to look for & communicate with the `Alpha Android APK`.
- [**Updated Plug Connect Button**](../../build-an-app-examples/plug-button/) - a new version of the [Plug Authentication Button](../../build-an-app-examples/plug-button/) that has a filter able to detect when someone is on mobile and therefore the dApp should use the `Alpha In-Page Provider` or is on desktop and should use the normal In-Page Provider supplied through the Plug Extension.

---

### Enabling & Testing Plug Mobile Auth

!!! danger 
    This is an alpha version, we suggest first testing this in a testing environment before deploying to production.

__To add Plug Mobile authentication into your application you need to update the inpage provider to the alpha version.__

To do so, there are two options:

- Download the updated [Plug Connect button](../../build-an-app-examples/plug-button/). If you already have the Plug Connect button, make sure that you update it to it's latest version. This button automatically injects the Updated In-Page Provider into your applications webpage.

- Install the Updated In-Page Provider to your application (it's open source!) manually. Here's some code that should help:

```js
    var=1
```

That's it. 🔥 Once one of those two options is completed and the updated in-page provider is available, your dApp is Plug Mobile ready! Your application can still use all of the same business logic as before, however, all calls to Plug will be routed through Wallet Connect to the `Alpha Android APK` on a user's device.

---

Once you're ready to test the implementation, you can: 

1. [Install the Alpha Android APK](https://play.google.com/apps/testing/co.psychedelic.plug) in a phone and go to the dapp in the browser. The name of the updated application should be `Plug - Crypto Wallet (Beta)`.
2. Connect to the application using the Plug Alpha Android app.


You're off to the races! 🐎 If you've gotten this far and are still stuck at any point or have feedback for us to that can help us to improve the user or developer experience, please reach out to us on [Discord](https://discord.gg/yVEcEzmrgm).