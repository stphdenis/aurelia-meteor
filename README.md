# aurelia-meteor

[![npm Version](https://img.shields.io/npm/v/aurelia-meteor.svg)](https://www.npmjs.com/package/aurelia-meteor)

## Platform Support

This library can be used in the **browser** only.

This library has primarily be done for Meteor 1.3 with use of NPM with commonjs.

the amd, commonjs and es2015 versions should work as is.

The SystemJS configuration is to be done for the folowing modules :
  - aurelia-framework
  - meteor/blaze
  - meteor/templating

## Library content

For now, we only have 3 components :
  - `BlazeAdaptor` class used to adapt the `<login-buttons>` to be used in Aurelia
  - `<login-buttons>` we can put anywhere in a HTML file
  - `Meteor` class giving live informations on meteor

## Library use

####1. `BlazeAdaptor` class

  See the login-buttons.js file to see how it can be used.

####2. `<login-buttons>`

```html
<require from="aurelia-meteor/login-buttons"></require>

<login-buttons></login-buttons>
```

and

```shell
meteor add accounts-password
meteor add accounts-ui
npm install --save aurelia-meteor
```

####3. `Meteor` class

```js
import { autoinject } from 'aurelia-framework';
import { Meteor } from 'aurelia-meteor';
 
@autoinject
export class Welcome {
  public meteor: Meteor;

  constructor(meteor: Meteor) {
    this.meteor = meteor;
  }
}
```

```html
<template>
  <p>status : ${meteor.status}</p>
  <p>connected : ${meteor.connected}</p>
  <p>retryCount : ${meteor.retryCount}</p>
  <p>userId : ${meteor.userId}</p>
  <p>isClient : ${meteor.isClient}</p>
  <p>isCordova : ${meteor.isCordova}</p>
  <p>isServer : ${meteor.isServer}</p>
  <p>release : ${meteor.release}</p>
  <p>address : ${meteor.address}</p>
  <p>verified : ${meteor.verified}</p>
  <p>username : ${meteor.username}</p>
  <p>createdAt : ${meteor.createdAt}</p>
</template>
```

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.

2. From the project folder, execute the following command:

  ```shell
  npm install
  ```
3. Ensure that [Gulp](http://gulpjs.com/) is installed. If you need to install it, use the following command:

  ```shell
  npm install -g gulp
  ```
4. To build the code, you can now run:

  ```shell
  gulp build
  ```
5. You will find the compiled code in the `dist` folder, available in three module formats: AMD, CommonJS and ES6.
