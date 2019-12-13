import githubService from '../thirdParties/github/githubService';

// we are supporting one service now, but in
// the future we can add more services.
const getAppropriateService = () => githubService;

const getServices = (req, res) => {
  const services = ['github'];
  res.send({ services });
};

// only supporting github for now
const getActionsForService = (req, res) => {
  const service = getAppropriateService(req.params.service);
  const { actions } = service;
  const actionNames = actions.map(action => action.name);
  res.send({ actions: actionNames });
};

const getTriggerForService = (req, res) => {
  const service = getAppropriateService(req.params.service);
  const { triggers } = service;
  const triggerNames = triggers.map(trigger => trigger.name);
  res.send({ triggers: triggerNames });
};

export {
  getServices,
  getActionsForService,
  getTriggerForService,
};
