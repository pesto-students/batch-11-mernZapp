import mongoose from 'mongoose';

const zappModel = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  trigger: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ActivityInstance',
  },
  action: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ActivityInstance',
  },
  name: {
    type: String,
  },
  status: {
    type: Boolean,
  },
});

const Zapp = mongoose.model('Zapp', zappModel);
export default Zapp;
