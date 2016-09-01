import { bindable } from 'aurelia-framework';

import { BlazeAdapter } from './blaze-adapter';

import 'meteor/accounts-ui';

export class LoginButtons extends BlazeAdapter {
  @bindable public align: string;

  public templateName(): string {
    return 'loginButtons';
  }

  public properties(): {} {
    return {align: this.align};
  }
}
