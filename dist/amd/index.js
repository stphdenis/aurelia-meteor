define(['exports', './aurelia-meteor'], function (exports, _aureliaMeteor) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  Object.keys(_aureliaMeteor).forEach(function (key) {
    if (key === "default") return;
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return _aureliaMeteor[key];
      }
    });
  });
});