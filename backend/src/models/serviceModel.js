/* eslint-disable no-use-before-define */
import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    trim: true,
    lowercase: true,
  },
  // adding this field for now.
});

serviceSchema.static.findByName = async function findByName(name) {
  const service = await Service.findOne({ name });

  if (!service) {
    console.log('no service found');
    return null;
  }

  return service;
};

const Service = mongoose.model('Service', serviceSchema);

export default Service;
