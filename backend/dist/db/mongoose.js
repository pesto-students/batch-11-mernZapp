"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const MongoClient = require('mongodb').MongoClient;
// const uri = "mongodb+srv://m001-student:jatin%401996@cluster0-hseid.mongodb.net/test?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
var initDb = function initDb() {
  _mongoose["default"].connect('mongodb+srv://m001-student:jatin%401996@cluster0-hseid.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  }).then(function () {
    console.log('connected');
  });
};

var _default = initDb;
exports["default"] = _default;