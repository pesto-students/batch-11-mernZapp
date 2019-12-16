"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gitIssueHandler = void 0;

var gitIssueHandler = function gitIssueHandler(req, res) {
  res.status(201);
  var requestBody = req.body;
  res.send(JSON.stringify(requestBody));
  res.send('issues touched!');
};

exports.gitIssueHandler = gitIssueHandler;