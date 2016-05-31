import { bindable } from 'aurelia-framework';

import { BlazeAdapter } from './lib/blaze-adapter';

export class LoginButtons extends BlazeAdapter {
  @bindable public align: string;

  public templateName(): string {
    return 'loginButtons';
  }

  public properties(): {} {
    return {align: this.align};
  }
}
