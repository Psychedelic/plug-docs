---
date: "1"
---

# Coinflip - PlugAgent/Authentication Example

![](imgs/coinflip.png)
Welcome to our Coin Flip app example! This is a sample project that showcases how applications **can integrate Plug to authenticate users and use the PlugAgent through the IC Provider API** to proxy-sign canister requests with the user's identity in Plug, to enable them to interact with the application.

In this case, the app connects to the user's wallet/identity in Plug, and the app requests authorization to use the PlugAgent to sign the necessary calls to "flip a coin" and take a guess in the app.

There's also a leader board in the coinflip that showcases how through the IC Provider API and the PlugAgent the user's Principal ID/identity is gathered and referenced as a user in the app, showing the win/lose ratio associated with their games.