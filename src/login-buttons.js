import { bindable } from 'aurelia-framework';

import { BlazeAdapter } from './blaze-adapter';

export class LoginButtons extends BlazeAdapter {
  @bindable align: string;

  templateName(): string {
    return 'loginButtons';
  }

  properties(): any { // {align: string}
    return {align: this.align};
  }
}
