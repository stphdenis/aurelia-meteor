'use strict';

System.register(['./blaze-adapter', './login-buttons', './meteor'], function (_export, _context) {
  "use strict";

  var BlazeAdapter, LoginButtons, Meteor;


  function configure(config) {
    config.globalResources('./login-buttons');

    configureHtmlResourcePlugin(config);
  }

  return {
    setters: [function (_blazeAdapter) {
      BlazeAdapter = _blazeAdapter.BlazeAdapter;
    }, function (_loginButtons) {
      LoginButtons = _loginButtons.LoginButtons;
    }, function (_meteor) {
      Meteor = _meteor.Meteor;
    }],
    execute: function () {
      _export('BlazeAdapter', BlazeAdapter);

      _export('LoginButtons', LoginButtons);

      _export('Meteor', Meteor);
    }
  };
});