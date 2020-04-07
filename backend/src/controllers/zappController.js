/* eslint-disable no-console */
import Zapp from '../models/zappModel';
import ZappLog from '../models/zappLogModel';
import { createWebHook, deleteWebHook } from './thirdPartiesController';

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

  const token = await req.user.getServiceToken(zapp.trigger.serviceName);
  try {
    // TODO: make it async, but as thee
    const webhookResponse = await createWebHook({
      service: zapp.trigger.serviceName,
      name: zapp.trigger.name,
      token,
      zapp,
    });
    zapp.trigger.webhookResponse = webhookResponse;
  } catch (error) {
    console.log('error creating webhook', error);
  }

  try {
    // activate the zapp,
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

    // delete the hook also
    const token = await req.user.getServiceToken(zapp.trigger.serviceName);
    await deleteWebHook({
      service: zapp.trigger.serviceName,
      token,
      zapp,
    });
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

const zappLogs = async (req, res) => {
  const { user } = req.user;
  try {
    const zappLogList = await ZappLog.find({ owner: user._id }, 'zapp zappName success createdAt')
      .populate('zapp', 'trigger')
      .populate('zapp', 'action');
    return res.status(200).send(zappLogList);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
    return error;
  }
};


export {
  createZapp,
  deleteZapp,
  zappLogs,
};
