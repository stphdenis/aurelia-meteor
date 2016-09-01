# aurelia-meteor

[![npm Version](https://img.shields.io/npm/v/aurelia-meteor.svg)](https://www.npmjs.com/package/aurelia-meteor)

## Platform Support

This library can be used in the **browser** only.

This library has primarily be done for Meteor 1.3+ with use of NPM with commonjs.

You can use this module with [`meteor-client-packages-meteor`](https://www.npmjs.com/package/meteor-client-packages-meteor) witch is for `Use Meteor's client Packages in a non Meteor project`.

If you want the amd, systemjs, es2015 or other version your welcome to help me.

## Library content

For now, we only have 4 components :
  - `BlazeAdaptor` class used to adapt the `<login-buttons>` to be used in Aurelia
  - `<login-buttons>` we can put anywhere in a HTML file
  - `Meteor` class giving live informations on meteor
  - `reactiveProperty` to make an aurelia property reactive

## Library use

### 1. `BlazeAdaptor` class

  See the login-buttons.js file to see how it can be used.

### 2. `<login-buttons>`

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

and

If you use a non meteor client like with [`meteor-client-packages-meteor`](https://www.npmjs.com/package/meteor-client-packages-meteor), be shure to have your `index.html` in UTF-8 :

```html
<!DOCTYPE html>
<html>
  <head>
    <!--meta http-equiv="content-type" content="text/html; charset=utf-8" /-->  <!-- HTML4 -->
    <meta charset="UTF-8"> <!-- HTML5 -->
    ...
  </head>
  ...
</html>
```

### 3. `Meteor` class

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
  <p>statusString : ${meteor.statusString}</p>
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

The difference between `meteor.statusString` and `meteor.status` is that `meteor.statusString` is a string while `meteor.status` is an enum class.

### 4. `reactiveProperty`

```js
import { reactiveProperty } from 'aurelia-meteor';
import { Tracker } from 'meteor/tracker';

export class SampleClass {
  @reactiveProperty propertyToBeReactive: boolean;

  constructor() {
    Tracker.autorun(() => {
      if (reactiveProperty(this, 'propertyToBeReactive')) {
        ...
      }
    });
  }
```

Notice that the parameter string of the function `reactiveProperty` is the property name.

If you have an other solution, please tell me.

## Building The Code

To build the code, follow these steps.

1. Ensure that [NodeJS](http://nodejs.org/) is installed. This provides the platform on which the build tooling runs.

2. From the project folder, execute the following commands:

  ```shell
  npm install
  typings install
  npm build
  ```

3. You will find the compiled code in the `dist` folder.
