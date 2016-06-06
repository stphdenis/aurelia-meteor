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

6. See `gulpfile.js` for other tasks related to generating the docs and linting.
