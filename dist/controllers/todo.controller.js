"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _todo = _interopRequireDefault(require("../services/todo.services"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//fetch all todos
var index = function index(request, response) {
  _todo["default"].search({}).then(function (todos) {
    response.status(200);
    response.json(todos);
  })["catch"](handleError(response));
}; //get specific todo by id


var get = function get(request, response) {
  var id = request.params.id;

  _todo["default"].get(id).then(function (todos) {
    response.status(200);
    response.json(todos == null ? {
      message: "Todo not present"
    } : todos);
  })["catch"](handleError(response));
}; //add new toto


var create = function create(request, response) {
  var newTodo = Object.assign({}, request.body);

  _todo["default"].create(newTodo).then(function (todos) {
    response.status(200);
    response.json(todos);
  })["catch"](handleError(response));
}; //update specific todo


var update = function update(request, response) {
  var id = request.params.id;

  if (id == undefined) {
    response.status(200);
    response.json("Invalid Input");
    return response;
  }

  var updateTodo = Object.assign({}, request.body);
  updateTodo.lastModifiedDate = new Date();

  _todo["default"].update(id, updateTodo).then(function (todos) {
    response.status(200);
    response.json(todos == null ? {
      message: "Todo not present"
    } : todos);
  })["catch"](handleError(response));
}; //delete a todo


var remove = function remove(request, response) {
  var id = request.params.id;

  if (id == undefined) {
    response.status(200);
    response.json("Invalid Input");
    return response;
  }

  _todo["default"].remove(id).then(function (todos) {
    response.status(200);
    response.json({
      message: "Delete Sucessful"
    });
  })["catch"](handleError(response));
}; //fetch specific todo by id


var fetch = function fetch(request, response) {
  var id = request.params.id;

  if (id == undefined) {
    response.status(200);
    response.json("Invalid Input");
    return response;
  }

  _todo["default"].checkIDExists(id).then(function (check) {
    if (check) {
      _todo["default"].get(id).then(function (todos) {
        response.status(200);
        response.json(todos == null ? {
          message: "Todo not present"
        } : todos);
      })["catch"](handleError(response));
    } else {
      response.status(200);
      response.json("Invalid Input");
    }
  });
};

var handleError = function handleError(error, response) {
  return function (error) {
    response.status(500);
    response.json({
      message: error.message
    });
  };
};

var _default = {
  index: index,
  get: get,
  create: create,
  update: update,
  remove: remove,
  fetch: fetch
};
exports["default"] = _default;