"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var aurelia_framework_1 = require('aurelia-framework');
var blaze_adapter_1 = require('./blaze-adapter');
require('meteor/accounts-ui');
var LoginButtons = (function (_super) {
    __extends(LoginButtons, _super);
    function LoginButtons() {
        _super.apply(this, arguments);
    }
    LoginButtons.prototype.templateName = function () {
        return 'loginButtons';
    };
    LoginButtons.prototype.properties = function () {
        return { align: this.align };
    };
    __decorate([
        aurelia_framework_1.bindable, 
        __metadata('design:type', String)
    ], LoginButtons.prototype, "align", void 0);
    return LoginButtons;
}(blaze_adapter_1.BlazeAdapter));
exports.LoginButtons = LoginButtons;
//# sourceMappingURL=login-buttons.js.map