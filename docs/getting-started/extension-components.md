---
date: "1"
---
# Getting Started

![](imgs/integrate.png)

## Browser extension

Interacting with the [Plug](https://plugwallet.ooo/) browser extension is made simple by the IC Provider API, an API that Plug injects into websites to allow them to call Plug and interact with the extension.

Get started by adding the extension in the browser, or if you already done so make sure that is enabled in the "extensions" or "Add-ons" menu of your browser!

Pin the Plug extension to the browser bar for easy access (here's an example of how to do it in [Chrome](https://support.google.com/chrome_webstore/answer/2664769?hl=en-GB)).

Once the [Plug](https://plugwallet.ooo/) extension is installed, a `plug` object is available as a property of `window.ic` in the browser window or tabs. Your application will be able to detect the extension by checking the `window` object and if available, interact with it!

## Console playground

Once you have the Plug extension, run a quick test to detect it by opening the browser developer console (here's an example for [Chrome](https://developer.chrome.com/docs/devtools/open/) and [Firefox](https://developer.mozilla.org/en-US/docs/Tools/Browser_Console)). Note that if you just installed Plug you need to **refresh the page (F5 on Windows)** so that Plug is detected correctly.

Copy and paste the following code snippet into the console and execute it by pressing the `ENTER` key of your keyboard.

```js
window.ic.plug && "Plug and play!"
```

The result output should be `Plug and play!`, if you have Plug installed correctly!

If you get an `error`, you're advised to check the installation instructions for [Plug](https://plugwallet.ooo/) and ensure that you have the extension installed correctly!

## Plug window object

Plug provides a simple API to websites and webapps at `window.ic.plug`, enabling them to "talk to" the Internet Computer via Plug.

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


----