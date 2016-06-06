import { bindable } from 'aurelia-framework';

import { BlazeAdapter } from './blaze-adapter';

export class LoginButtons extends BlazeAdapter {
  @bindable align: string;//public

  templateName(): string {//public
    return 'loginButtons';
  }

  properties(): Map {//public
    return {align: this.align};
  }
}
