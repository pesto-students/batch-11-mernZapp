import mongoose from 'mongoose';

const zappModel = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  trigger: {
    name: {
      type: String,
      required: true,
    },
  },
  action: {
    name: {
      type: String,
      required: true,
    },
  },
  name: {
    type: String,
  },
  status: {
    type: Boolean,
  },
  dataOut: {
    type: Object,
  },
});

const Zapp = mongoose.model('Zapp', zappModel);
export default Zapp;
