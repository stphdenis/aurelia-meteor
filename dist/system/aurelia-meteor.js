'use strict';

System.register(['./blaze-adapter', './login-buttons'], function (_export, _context) {
  "use strict";

  var BlazeAdapter, LoginButtons;


  function configure(config) {
    if (FEATURE.shadowDOM) {
      DOM.injectStyles('body /deep/ .aurelia-hide { display:none !important; }');
    } else {
      DOM.injectStyles('.aurelia-hide { display:none !important; }');
    }

    config.globalResources('./blaze-adapter', './login-buttons');

    configureHtmlResourcePlugin(config);

    var viewEngine = config.container.get(ViewEngine);
    viewEngine.addResourcePlugin('.css', {
      'fetch': function fetch(address) {
        var _ref;

        return _ref = {}, _ref[address] = _createCSSResource(address), _ref;
      }
    });
  }

  return {
    setters: [function (_blazeAdapter) {
      BlazeAdapter = _blazeAdapter.BlazeAdapter;
    }, function (_loginButtons) {
      LoginButtons = _loginButtons.LoginButtons;
    }],
    execute: function () {
      _export('BlazeAdapter', BlazeAdapter);

      _export('LoginButtons', LoginButtons);
    }
  };
});