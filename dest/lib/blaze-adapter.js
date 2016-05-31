"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var blaze_1 = require('meteor/blaze');
var templating_1 = require('meteor/templating');
var aurelia_framework_1 = require('aurelia-framework');
/**
 * If want to inject into the extended class, you have to inject the current Element
 * and pass it to super() :
 *   constructor(elementRef: Element, xxx: Ttt) {
 *     super(elementRef);
 *     this.xxx = xxx;
 *   }
 */
var BlazeAdapter = (function () {
    function BlazeAdapter(elementRef) {
        this._element = elementRef;
    }
    BlazeAdapter.prototype.bind = function (bindingContext, overrideContext) {
        this._view = blaze_1.Blaze.renderWithData(templating_1.Template[this.templateName()], this.properties(), this._element);
    };
    BlazeAdapter.prototype.unbind = function () {
        blaze_1.Blaze.remove(this._view);
    };
    BlazeAdapter = __decorate([
        aurelia_framework_1.inlineView('<template></template>'),
        aurelia_framework_1.autoinject,
        __metadata('design:paramtypes', [Element])
    ], BlazeAdapter);
    return BlazeAdapter;
}());
exports.BlazeAdapter = BlazeAdapter;
