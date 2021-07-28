---
date: "1"
---

# Plugged

![](imgs/nns-example.png)

The application we are going to build today is called **NNS**, a simple application that provides some stats from the [NNS/UI Canister](https://nns.ic0.app/).

A [live demo](http://demo.plugwallet.ooo/nns/) is available for testing!

## Requirements 🤔

The guide assumes you have read the [Getting started](/getting-started/connect-to-plug/), completed the [Buy me a Coffee](build-app-buy-me-a-coffee.md) and 
[Plugged](plugged.md)!

As such, we'll assume you know how to execute certain commands, how to run a basic HTTP Server, a few other things.

If you haven't, complete them first and only after follow this guideline!

## Boilerplate 🏗

We're going to provide the boilerplate code, as we expect you to have completed the basic tutorials for [Buy me a Coffee](build-app-buy-me-a-coffee.md) and [Plugged](plugged.md). The idea is to skip the basics!

In the project directory, create a new file named `index.html` and copy and paste the following content:

```html
<html>
  <head>
    <title>NNS</title>
    <link rel="stylesheet" href="main.css">
    <script type="text/javascript" src="app.js?202107281700"></script>
  </head>
  <body>
    <img id="logo" src="plug-logo.svg" alt="Plug" />
    <div id="app">
      <button id="button-connect" class="button-rainbow">
        <div class="button-container">
          <img
            src="plug-light.svg"
            alt="Plug logo"
            class="plug-icon"
          />
          <span id="btn-title">Connect with Plug</span>
        </div>
      </button>
    </div>
  </body>
</html>
```

Create the stylesheet file named `main.css` and copy and paste the following content:

```css
#app {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

#logo {
  width: 80px;
  position: absolute;
  padding: 20px;
  top: 0;
  left: 0;
}

#btn-title {
  font-family: "HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  font-weight: 600;
}

.button-rainbow {
  border: none;
  background: linear-gradient(93.07deg, #FFD719 0.61%, #F754D4 33.98%, #1FD1EC 65.84%, #48FA6B 97.7%);
  padding: 2px;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s;
  transform: scale(1) translate3d( 0, 0, 0) perspective(1px);
}

.button-rainbow:hover {
  transform: scale(1.04) translate3d( 0, 0, 0) perspective(1px);
}

.button-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  background: white;
  padding: 5px 12px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 600;
}

.dark {
  background: #111827;
  color: white;
}

.plug-icon {
  margin-right: 9px;
}
```

Create a the file `app.js` and keep it simple for now, as we'll go through the process together!

```js
console.log('app.js placeholder!');
```

## Local server 🤖

Launch the [Http server](build-app-buy-me-a-coffee.md#http-server) as described in the [Buy me a coffee example](build-app-buy-me-a-coffee.md) to serve the `index.html` and open the address in the browser.

From then on, refresh the page to see our boilerplate!

```sh
http-server .
```

## Application logic 🧠

## Plug integration 👷🏻‍♀️

## Call-to-action handlers 📢

## Plug action implementations 👷🏻‍♀️

Hope you enjoyed the read this far and got to build a very simple application with Plug!

## Project source-code ⚙️

The source-code for this guide can be found in our [examples](https://github.com/Psychedelic/plug-docs/tree/main/examples/nns).

