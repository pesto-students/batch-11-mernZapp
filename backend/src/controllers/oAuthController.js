import queryString from 'query-string';
import { handleGithubOAuth } from '../thirdParties/github/githubOAuthController';

const fetchTokenFromGithub = async (req, res) => {
  const { code } = req.params;

  try {
    const response = await handleGithubOAuth(code);
    const parsedString = queryString.parse(response.body);
    const accessToken = parsedString.access_token;
    const tokenType = parsedString.token_type;

    if (accessToken) {
      await req.user.saveServiceToken('github', accessToken);
      res.status(200).send({ success: true, data: { accessToken, tokenType } });
      return;
    }

    res.status(200).send({ success: false, data: { message: response.body } });
  } catch (error) {
    console.log(error);
    res.status(500).send({ success: false, data: { message: false } });
  }
};

export { fetchTokenFromGithub };
