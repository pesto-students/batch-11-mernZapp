import mongoose from 'mongoose';

const activitySchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  params: {
    type: {},
  },
});

const Activity = mongoose.model('Activity', activitySchema);
export default Activity;
