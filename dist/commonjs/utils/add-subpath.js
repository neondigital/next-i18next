"use strict";

require("core-js/modules/es6.object.define-property");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addSubpath = void 0;

require("core-js/modules/es6.regexp.replace");

var addSubpath = function addSubpath(url, subpath) {
  return url.replace('/', "/".concat(subpath, "/")).replace(/(https?:\/\/)|(\/)+/g, "$1$2").replace(/\/$/, '');
};

exports.addSubpath = addSubpath;