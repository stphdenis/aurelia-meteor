declare namespace DOM {
  function injectStyles(str: string): void;
}

declare namespace FEATURE {
  let shadowDOM: boolean;
}

declare function configureHtmlResourcePlugin(val: {globalResources: Function}): void;
