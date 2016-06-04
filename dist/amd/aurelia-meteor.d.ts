declare module 'aurelia-meteor' {
  /**
   * If want to inject into the extended class, you have to inject the current Element
   * and pass it to super() :
   *   constructor(elementRef: Element, xxx: Ttt) {
   *     super(elementRef);
   *     this.xxx = xxx;
   *   }
   */
  export abstract class BlazeAdapter {
      abstract templateName(): string;
      abstract properties(): {} | Function;
      constructor(elementRef: Element);
      bind(bindingContext: Object, overrideContext: Object): void;
      unbind(): void;
  }

  export class LoginButtons extends BlazeAdapter {
      align: string;
      templateName(): string;
      properties(): {};
  }
}
