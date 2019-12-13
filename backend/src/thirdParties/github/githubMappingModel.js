import mongoose from 'mongoose';

const githubModelSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  githubUsername: {
    type: String,
  },
});

githubModelSchema.statics.findByGhUsername = async function findByGhUsername(githubUsername) {
  const githubModel = await this.findOne({ githubUsername });
  if (!githubModel) {
    return {};
  }
  return githubModel;
};

githubModelSchema.statics.findByUserId = async function findByUserId(userId) {
  const githubModel = await this.findOne({ userId });
  if (!githubModel) {
    return {};
  }
  return githubModel;
};

const GithubModel = mongoose.model('Github', githubModelSchema);
export default GithubModel;
