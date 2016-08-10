import 'aurelia-polyfills';
import { PLATFORM } from 'aurelia-pal';
import { Tracker } from 'meteor/tracker';

export function reactiveProperty(targetOrConfig: any, key?: string, descriptor?: PropertyDescriptor): any {
  function get(target: any, key: string): any {
    target[`_meteorReactive_${key}_`].depend();
    return target[key];
  }

  function deco(target: any, key: string, descriptor?: any, config?: any): any { // eslint-disable-line no-shadow
    // class decorator?
    if (key === undefined) {
      target = target.prototype;
      key = typeof config === 'string' ? config : config.name;
    }

    // use a convention to compute the inner property name
    const innerPropertyName = `_${key}`;

    if (descriptor) {
      // babel passes in the property descriptor with a method to get the initial value.

      // set the initial value of the property if it is defined.
      if (typeof descriptor.initializer === 'function') {
        target[innerPropertyName] = descriptor.initializer();
      }
    } else {
      descriptor = {};
    }

    // we're adding a getter and setter which means the property descriptor
    // cannot have a "value" or "writable" attribute
    delete descriptor.writable;
    delete descriptor.initializer;

    // add the getter and setter to the property descriptor.
    descriptor.get = function() { return this[innerPropertyName]; };
    descriptor.set = function(newValue) {
      this[innerPropertyName] = newValue;
      this[`_meteorReactive_${key}_`].changed();
    };

    // make sure Aurelia doesn't use dirty-checking by declaring the property's
    // dependencies. This is the equivalent of "@computedFrom(...)".
    descriptor.get.dependencies = [innerPropertyName];

    PLATFORM.global.Reflect.defineProperty(target, key, descriptor);

    target[`_meteorReactive_${key}_`] = new Tracker.Dependency;
    target['meteorReactive'] = function(key: string) {
      return get(this, key);
    };
  }

  if(targetOrConfig[`_meteorReactive_${key}_`] === undefined) {
    if (key === undefined) {
      // parens...
      return (t, k, d) => deco(t, k, d, targetOrConfig);
    }
    return deco(targetOrConfig, key, descriptor);
  } else {
    return get(targetOrConfig, key);
  }
}

/*
          | typescript       | babel
----------|------------------|-------------------------
property  | config           | config
w/parens  | target, key      | target, key, descriptor
----------|------------------|-------------------------
property  | target, key      | target, key, descriptor
no parens | n/a              | n/a
----------|------------------|-------------------------
class     | config           | config
          | target           | target
*/
