"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var TodoSchema = new _mongoose["default"].Schema({
  title: {
    type: String,
    required: "Title is a required property."
  },
  description: {
    type: String
  },
  createdDate: {
    type: Date,
    "default": Date.now
  },
  lastModifiedDate: {
    type: Date,
    "default": Date.now
  }
}, {
  versionKey: false
}); //create a virtual id , not saved in DB

TodoSchema.virtual('id').get(function () {
  return this._id.toHexString();
}); //converting the virtual id to json when needed

TodoSchema.set('toJSON', {
  virtuals: true
}); //creating a collection

var model = _mongoose["default"].model('allTodos', TodoSchema);

var _default = model;
exports["default"] = _default;