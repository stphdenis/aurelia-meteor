define(['exports', './blaze-adapter', './login-buttons', './meteor'], function (exports, _blazeAdapter, _loginButtons, _meteor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Meteor = exports.LoginButtons = exports.BlazeAdapter = undefined;


  function configure(config) {
    config.globalResources('./login-buttons');

    configureHtmlResourcePlugin(config);
  }

  exports.BlazeAdapter = _blazeAdapter.BlazeAdapter;
  exports.LoginButtons = _loginButtons.LoginButtons;
  exports.Meteor = _meteor.Meteor;
});