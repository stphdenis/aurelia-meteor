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
var aurelia_dependency_injection_1 = require('aurelia-dependency-injection');
var aurelia_templating_1 = require('aurelia-templating');
var AccountsUI = (function () {
    function AccountsUI(elementRef) {
        this._element = elementRef;
        //  this._view = Blaze.renderWithData(Template['loginButtons'], data, elementRef);
    }
    AccountsUI.prototype.bind = function (bindingContext, overrideContext) {
        var data = this.align ? { align: this.align } : {};
        this._view = blaze_1.Blaze.renderWithData(templating_1.Template['loginButtons'], data, this._element);
    };
    AccountsUI.prototype.attached = function () {
        //  const data: {} = align ? { align } : {};
        //  this._view = Blaze.renderWithData(Template['loginButtons'], data, elementRef);
    };
    AccountsUI.prototype.detached = function () {
        //  Blaze.remove(this._view);
    };
    AccountsUI.prototype.unbind = function () {
        blaze_1.Blaze.remove(this._view);
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], AccountsUI.prototype, "align", void 0);
    AccountsUI = __decorate([
        aurelia_templating_1.noView,
        aurelia_dependency_injection_1.autoinject, 
        __metadata('design:paramtypes', [Element])
    ], AccountsUI);
    return AccountsUI;
}());
exports.AccountsUI = AccountsUI;
