import { BlazeAdapter } from './blaze-adapter';
import { LoginButtons } from './login-buttons';
import { Meteor } from './meteor';

function configure(config: any) { // eslint-disable-line no-unused-vars
  config.globalResources(
    './login-buttons'
  );

  configureHtmlResourcePlugin(config);
}

export {
  BlazeAdapter,
  LoginButtons,
  Meteor
};
