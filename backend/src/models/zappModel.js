import mongoose from 'mongoose';


const zappSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
  },
  action: {
    serviceName: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  trigger: {
    serviceName: {
      type: String,
    },
    name: {
      type: String,
    },
    data: {
      type: {},
    },
    webhookResponse: {
      type: {},
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  actionRequestBody: {
    type: {},
  },
  active: {
    type: Boolean,
  },
}, {
  timestamps: true,
});

const Zapp = mongoose.model('Zapp', zappSchema);
export default Zapp;
