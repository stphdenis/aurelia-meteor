define(['exports', './blaze-adapter', './login-buttons'], function (exports, _blazeAdapter, _loginButtons) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.LoginButtons = exports.BlazeAdapter = undefined;


  function configure(config) {
    if (FEATURE.shadowDOM) {
      DOM.injectStyles('body /deep/ .aurelia-hide { display:none !important; }');
    } else {
      DOM.injectStyles('.aurelia-hide { display:none !important; }');
    }

    config.globalResources('./login-buttons');

    configureHtmlResourcePlugin(config);

    var viewEngine = config.container.get(ViewEngine);
    viewEngine.addResourcePlugin('.css', {
      'fetch': function fetch(address) {
        var _ref;

        return _ref = {}, _ref[address] = _createCSSResource(address), _ref;
      }
    });
  }

  exports.BlazeAdapter = _blazeAdapter.BlazeAdapter;
  exports.LoginButtons = _loginButtons.LoginButtons;
});