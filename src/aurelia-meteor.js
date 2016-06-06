function configure(config: Map) { // eslint-disable-line no-unused-vars
  if (FEATURE.shadowDOM) {
    DOM.injectStyles('body /deep/ .aurelia-hide { display:none !important; }');
  } else {
    DOM.injectStyles('.aurelia-hide { display:none !important; }');
  }

  config.globalResources(
    './login-buttons'
  );

  configureHtmlResourcePlugin(config);

  let viewEngine = config.container.get(ViewEngine);
  viewEngine.addResourcePlugin('.css', {
    'fetch': function(address: string): Map {
      return { [address]: _createCSSResource(address) };
    }
  });
}
