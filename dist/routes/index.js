"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _todo = _interopRequireDefault(require("./todo.route"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//exporting the needed routes
var _default = function _default(app) {
  app.use('/', _todo["default"]);
};

exports["default"] = _default;