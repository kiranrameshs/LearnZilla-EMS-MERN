"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _todo = _interopRequireDefault(require("../../dist/models/todo"));

var _todo2 = _interopRequireDefault(require("../models/todo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Methods to perform CRUD actions on todo collection
var search = function search(id) {
  var promise = _todo2["default"].find(id).exec();

  return promise;
};

var get = function get(id) {
  var promise = _todo2["default"].findById(id).exec();

  return promise;
};

var create = function create(todo) {
  var newtodo = new _todo2["default"](todo);
  var promise = newtodo.save();
  return promise;
};

var update = function update(id, todo) {
  var promise = _todo2["default"].findByIdAndUpdate({
    _id: id
  }, todo, {
    "new": true
  } // add todo if not present
  ).exec();

  return promise;
};

var remove = function remove(id, todo) {
  var promise = _todo2["default"].remove({
    _id: id
  }).exec();

  return promise;
};

var checkIDExists = function checkIDExists(id) {
  _todo2["default"].findOne({
    _id: id
  }).select("_id").lean().then(function (result) {
    if (result) return true; //ID exists        
    else return false; //ID does not exist
  });
};

var _default = {
  search: search,
  get: get,
  create: create,
  update: update,
  remove: remove,
  checkIDExists: checkIDExists
};
exports["default"] = _default;