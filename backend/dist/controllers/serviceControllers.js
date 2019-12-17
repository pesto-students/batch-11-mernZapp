"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTriggerForService = exports.getActionsForService = exports.getServices = void 0;

var _githubService = _interopRequireDefault(require("../thirdParties/github/githubService"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// we are supporting one service now, but in
// the future we can add more services.
const getAppropriateService = () => _githubService.default;

const getServices = (req, res) => {
  const services = ['github'];
  res.send({
    services
  });
}; // only supporting github for now


exports.getServices = getServices;

const getActionsForService = (req, res) => {
  const service = getAppropriateService(req.params.service);
  const {
    actions
  } = service;
  const actionNames = actions.map(action => action.name);
  res.send({
    actions: actionNames
  });
};

exports.getActionsForService = getActionsForService;

const getTriggerForService = (req, res) => {
  const service = getAppropriateService(req.params.service);
  const {
    triggers
  } = service;
  const triggerNames = triggers.map(trigger => trigger.name);
  res.send({
    triggers: triggerNames
  });
};

exports.getTriggerForService = getTriggerForService;