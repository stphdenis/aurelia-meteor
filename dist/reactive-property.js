"use strict";
require('aurelia-polyfills');
var aurelia_pal_1 = require('aurelia-pal');
var tracker_1 = require('meteor/tracker');
function reactiveProperty(targetOrConfig, key, descriptor) {
    function get(target, key) {
        target[("_meteorReactive_" + key + "_")].depend();
        return target[key];
    }
    function deco(target, key, descriptor, config) {
        if (key === undefined) {
            target = target.prototype;
            key = typeof config === 'string' ? config : config.name;
        }
        var innerPropertyName = "_" + key;
        if (descriptor) {
            if (typeof descriptor.initializer === 'function') {
                target[innerPropertyName] = descriptor.initializer();
            }
        }
        else {
            descriptor = {};
        }
        delete descriptor.writable;
        delete descriptor.initializer;
        descriptor.get = function () { return this[innerPropertyName]; };
        descriptor.set = function (newValue) {
            this[innerPropertyName] = newValue;
            this[("_meteorReactive_" + key + "_")].changed();
        };
        descriptor.get.dependencies = [innerPropertyName];
        aurelia_pal_1.PLATFORM.global.Reflect.defineProperty(target, key, descriptor);
        target[("_meteorReactive_" + key + "_")] = new tracker_1.Tracker.Dependency;
        target['meteorReactive'] = function (key) {
            return get(this, key);
        };
    }
    if (targetOrConfig[("_meteorReactive_" + key + "_")] === undefined) {
        if (key === undefined) {
            return function (t, k, d) { return deco(t, k, d, targetOrConfig); };
        }
        return deco(targetOrConfig, key, descriptor);
    }
    else {
        return get(targetOrConfig, key);
    }
}
exports.reactiveProperty = reactiveProperty;
//# sourceMappingURL=reactive-property.js.map