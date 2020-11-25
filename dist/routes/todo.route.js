"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _todo = _interopRequireDefault(require("../controllers/todo.controller"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = _express["default"].Router(); // search- GET /todos
// create- POST/ todos


router.route('/todos').get(_todo["default"].index).post(_todo["default"].create); // retrieve - GET /todo/${id}
// update - GET /todo/${id}
// delete - DELETE /todos/${id}

router.route('/todos/:id').get(_todo["default"].get).put(_todo["default"].update)["delete"](_todo["default"].remove); //module.exports = router;

var _default = router;
exports["default"] = _default;