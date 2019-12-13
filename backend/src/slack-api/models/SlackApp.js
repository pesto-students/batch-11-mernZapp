import mongoose from 'mongoose';

const slackAppSchema = new mongoose.Schema({
  zappName: {
    type: String,
    lowercase: true,
    required: [true, 'Zapp name is required'],
  },
  token: {
    type: String,
    required: [true, 'Token is required'],
  },
  userData: {
    type: Map,
    of: String,
  },
  teamName: {
    type: String,
    required: [true, 'Team name is required'],
  },
});

const SlackAppSchema = mongoose.model('SlackAppSchema', slackAppSchema);

export default SlackAppSchema;
