import githubService from '../thirdParties/github/github.config';


const getServices = async (req, res) => {
  try {
    const services = ['github'];
    res.send({ services });
  } catch (error) {
    res.status(500).send();
  }
};

// only supporting github for now
const getActionsForService = async (req, res) => {
  try {
    const { actions } = githubService;
    const actionNames = actions.map(action => action.name);
    res.send({ actions: actionNames });
  } catch (error) {
    res.status(500).send();
  }
};

const getTriggerForService = async (req, res) => {
  try {
    const { triggers } = githubService;
    const triggerNames = triggers.map(trigger => trigger.name);
    res.send({ triggers: triggerNames });
  } catch (error) {
    res.send(500).send();
  }
};

export {
  getServices,
  getActionsForService,
  getTriggerForService,
};
