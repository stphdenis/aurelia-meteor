'use strict';

import { FrameworkConfiguration } from 'aurelia-framework';

export { reactiveProperty } from './reactive-property';
export { LoginButtons } from './login-buttons';
export { BlazeAdapter } from './blaze-adapter';
export { Meteor, StatusEnum } from './meteor';

export function configure(frameworkConfiguration: FrameworkConfiguration): void { // tslint-disable-line no-unused-variable
  frameworkConfiguration.globalResources('./login-buttons');
}
