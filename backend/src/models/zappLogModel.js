import mongoose from 'mongoose';


const zappLogSchema = new mongoose.Schema({
  zapp: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  zappName: {
    type: String,
    unique: true,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  triggerData: {
    type: {},
  },
  actionData: {
    type: {},
  },
  success: {
    type: Boolean,
  },
}, {
  timestamps: true,
});

const ZappLog = mongoose.model('ZappLog', zappLogSchema);
export default ZappLog;
