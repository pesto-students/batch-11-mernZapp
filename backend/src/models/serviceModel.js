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

const Service = mongoose.model('Service', serviceSchema);

export default Service;
