declare module "meteor/meteor" {
  module Meteor {
    interface Status {
      status: Meteor.StatusEnum;
      connected: boolean;
      retryCount: number;
    }
    function status(): Meteor.Status;
  }
}

declare namespace DOM {
  function injectStyles(str: string): void;
}

declare namespace FEATURE {
  let shadowDOM: boolean;
}

declare function configureHtmlResourcePlugin(val: {globalResources: Function}): void;
