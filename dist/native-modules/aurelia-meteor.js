import { BlazeAdapter } from './blaze-adapter';
import { LoginButtons } from './login-buttons';
import { Meteor } from './meteor';

function configure(config) {
  config.globalResources('./login-buttons');

  configureHtmlResourcePlugin(config);
}

export { BlazeAdapter, LoginButtons, Meteor };