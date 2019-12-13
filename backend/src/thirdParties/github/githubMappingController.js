import GithubModel from './githubMappingModel';

const addUsernameMapping = async (githubUsername, dbUserId) => {
  const githubModel = new GithubModel({
    userId: dbUserId,
    githubUsername,
  });
  await githubModel.save();
};

const getUsername = async githubUsername => {
  const githubModel = await GithubModel.findByGhUsername(githubUsername);
  return githubModel.userId;
};

const getGithubUsername = async userId => {
  const githubModel = await GithubModel.findByUserId(userId);
  return githubModel.githubUsername;
};

const deleteMapping = async (githubUsername, dbUserId) => {
  await GithubModel.deleteMany({ githubUsername, userId: dbUserId });
};

export {
  addUsernameMapping,
  getUsername,
  getGithubUsername,
  deleteMapping,
};
