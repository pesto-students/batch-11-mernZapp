import mongoose from 'mongoose';

// will be made after getting the authentication.
const serviceInstanceSchema = new mongoose.Schema({
  service: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Service',
    required: true,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  accessToken: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
}, {
  timestamps: true,
});

const ServiceInstance = mongoose.model('ServiceInstance', serviceInstanceSchema);

export default ServiceInstance;
