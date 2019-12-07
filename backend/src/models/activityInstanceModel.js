import mongoose, { Mongoose, model } from 'mongoose';

const activityInstanceModel = new Mongoose.Schema({
  activity: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Activity',
    required: true,
  },
  isTrigger: {
    type: Boolean,
    required: true,
  },
  serviceInstance: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ActivityInstance',
  },
});


const ActivityInstance = model.mongoose('ActivityInstance', activityInstanceModel);

export default ActivityInstance;
