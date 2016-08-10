'use strict';

export { reactiveProperty } from './reactive-property';
export { LoginButtons } from './login-buttons';
export { BlazeAdapter } from './blaze-adapter';
export { Meteor } from './meteor';

export function configure(frameworkConfig: {globalResources: Function, container: any}): void { // tslint-disable-line no-unused-variable
  frameworkConfig.globalResources('./login-buttons');
}
