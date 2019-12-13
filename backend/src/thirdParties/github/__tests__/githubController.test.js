import request from 'supertest';
import {
  addUsernameMapping,
  getUsername,
  getGithubUsername,
  deleteMapping,
} from '../githubMappingController';
import app from '../../../index';
import User from '../../../models/userModel';

describe('test github mapping contoller', () => {
  let authToken;
  let userIdCreated = '';
  beforeAll(async () => {
    const res = await request(app)
      .post('/users/create')
      .send({
        email: 'demo8@gmail.com',
        password: 'harish',
      });
    const { token } = res.body;
    authToken = token;
    const user = await User.findByCredentials('demo8@gmail.com', 'harish');
    userIdCreated = user._id;
  });

  it('should insert the username and object id', async () => {
    await addUsernameMapping('demo-github-username', userIdCreated);
    const userId = await getUsername('demo-github-username');
    expect(userId).toEqual(userIdCreated);

    const githubUserName = await getGithubUsername(userIdCreated);
    expect(githubUserName).toEqual('demo-github-username');

    await deleteMapping('demo-github-username', userIdCreated);
  });

  afterAll(async () => {
    const resDelete = await request(app)
      .delete('/users/me')
      .set('Authorization', `Bearer ${authToken}`);
    // done();
    app.close();
    console.log(resDelete.body);
  });
});
