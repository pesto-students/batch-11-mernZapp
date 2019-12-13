import Zapp from '../models/zappModel';

const createZapp = async (req, res) => {
  const { action } = req.body;
  const { trigger } = req.body;

  // validate action
  if (!action.serviceName) {
    res.status(400).send({ msg: 'Please send valid action' });
  }

  if (!action.name) {
    res.status(400).send({ msg: 'Please send valid action' });
  }

  // validate trigger
  if (!trigger.serviceName) {
    res.status(400).send({ msg: 'Please send valid trigger' });
  }

  if (!trigger.name) {
    res.status(400).send({ msg: 'Please send valid trigger' });
  }

  const zapp = new Zapp({
    ...req.body,
    owner: req.user._id,
    active: false,
  });
  try {
    await zapp.save();
    res.status(200).send(zapp);
  } catch (error) {
    console.log(error);
    res.status(400).send(error);
  }
};

const deleteZapp = async (req, res) => {
  try {
    const zapp = await Zapp.findOneAndDelete({ _id: req.params.zapid, owner: req.user._id });
    if (!zapp) {
      return res.status(404).send('zapp not found');
    }
    return res.status(200).send({ zapp });
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    return error;
  }
};

export {
  createZapp,
  deleteZapp,
};
