/**
 * If want to inject into the extended class, you have to inject the current Element
 * and pass it to super() :
 *   constructor(elementRef: Element, xxx: Ttt) {
 *     super(elementRef);
 *     this.xxx = xxx;
 *   }
 */
export declare abstract class BlazeAdapter {
    private _view;
    private _element;
    abstract templateName(): string;
    abstract properties(): {} | Function;
    constructor(elementRef: Element);
    bind(bindingContext: Object, overrideContext: Object): void;
    unbind(): void;
}
