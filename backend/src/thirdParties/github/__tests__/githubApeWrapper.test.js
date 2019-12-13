import { GITHUB_TEST_AUTH_TOKEN } from '../../../config';
import {
  getBasicUserInfo,
  createGist,
  getListOfRepository,
  createHook,
  deleteHook,
} from '../githubApisWrapper';

describe('test all the github apis', () => {
  it('should get basic user info', async () => {
    const { statusCode, body } = await getBasicUserInfo({ token: GITHUB_TEST_AUTH_TOKEN });
    expect(statusCode).toEqual(200);
    expect(JSON.parse(body)).toHaveProperty('login');
  });

  it('should test create gist api integration', async () => {
    const requestData = {
      description: 'Hello World Examples',
      public: true,
      files: {
        'hello_world_python.txt': {
          content: 'Run `python hello_world.py` to print Hello World',
        },
      },
    };
    const { statusCode, body } = await createGist({
      token: GITHUB_TEST_AUTH_TOKEN,
      requestData,
    });

    expect(statusCode).toEqual(201);
    expect(JSON.parse(JSON.stringify(body))).toHaveProperty('id');
  });

  it('return the list of repositories of a user', async () => {
    const { statusCode, body } = await getListOfRepository({
      token: GITHUB_TEST_AUTH_TOKEN,
    });

    expect(statusCode).toEqual(200);
    expect(JSON.parse(body)).toBeInstanceOf(Array);
  });

  let hookId = '';

  it('create a hook', async () => {
    const { statusCode, body } = await createHook({
      token: GITHUB_TEST_AUTH_TOKEN,
      owner: 'harish-aka-shivi',
      repo: 'task-manager',
      urlToDeliver: 'https://webhook.site/#!/1f2bd7d1-c6ba-4898-9a76-9247327423d5/72aee5e7-ec39-4db0-b788-8f6a61c63ce1/1',
      events: ['star'],
    });

    expect(statusCode).toEqual(201);
    hookId = body.id;
  });

  it('delete a hook', async () => {
    const { statusCode } = await deleteHook({
      token: GITHUB_TEST_AUTH_TOKEN,
      owner: 'harish-aka-shivi',
      repo: 'task-manager',
      hookId,
    });

    expect(statusCode).toEqual(204);
  });
});
