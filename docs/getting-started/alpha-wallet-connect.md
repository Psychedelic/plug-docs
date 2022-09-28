---
date: "1"
---

![](imgs/balances-transactions.png)

## Alpha Wallet Connect

### Disclaimer

We are releasing the alpha version of wallet connect for plug mobile. This feature enables the developers to provide another way of connecting to their dapps and users of enjoing the ecosystem directly from their phones. The alpha version is aimed toward the developers to have time to test how the integration works and make the (minor) changes needed to make it work with their dApps. We expect to find problems on the implementation so if you are a user you can download the APK but use it at your own risk.

### Introduction

The alpha wallet connect comes with 3 packages

- Alpha Android APK
- Alpha inpage provider
- [OPTIONAL] Plug Connect button

In the Alpha Android APK and the Alpha inpage provider is the logic for the communication between the web application and the mobile application. You need to add a logic in your application to differentiate when a user is using it on the phone, below you can find the code, If you are using the Plug Connect button there is also a new version that automatically handles this.

### Installing Wallet Connect

[IMPORTANT] **First test this in a testing environment**

To add wallet connect into your application you need to follow the following steps

1. Add the alpha inpage provider to your project.
2. If you dont use Plug Connect button, add code to your plug connection logic  

    ```js
        var=1
    ```

3. If you use the Plug Connect button, update to the alpha version.
4. Install the Alpha Android APK in a phone and go to the dapp in the browser.
5. Connect to the application using the Plug Alpha Android app.

Make sure you to come by our [Discord](https://discord.gg/yVEcEzmrgm) for any feedback or help with the implementation.