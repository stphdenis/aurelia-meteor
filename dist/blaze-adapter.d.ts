export declare class BlazeAdapter {
    private _view;
    private _element;
    constructor(elementRef: Element);
    templateName(): string;
    properties(): {} | Function;
    bind(bindingContext: Object, overrideContext: Object): void;
    unbind(): void;
}
