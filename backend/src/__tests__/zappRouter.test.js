import request from 'supertest';
import app from '../index';

describe('test the zapp workflow APIs', () => {
  let authToken;
  beforeAll(async () => {
    const res = await request(app)
      .post('/users/create')
      .send({
        email: 'demo5@gmail.com',
        password: 'harish',
      });
    const { token } = res.body;
    authToken = token;
  });

  it('should create a new zapp', async () => {
    const res = await request(app)
      .post('/create-zapp')
      .set('Authorization', `Bearer ${authToken}`)
      .send({
        title: 'Create gist on star',
        action: {
          serviceName: 'github',
          name: 'create_gist',
        },
        trigger: {
          serviceName: 'github',
          name: 'star',
        },
        actionRequestBody: {
          description: 'demo description',
          title: 'demoTitle',
        },
      });
    expect(res.statusCode).toEqual(200);
    const zapId = res.body._id;

    const resZappDel = await request(app)
      .delete(`/delete-zapp/${zapId}`)
      .set('Authorization', `Bearer ${authToken}`);

    expect(resZappDel.statusCode).toEqual(200);
  });

  afterAll(async () => {
    await request(app)
      .delete('/users/me')
      .set('Authorization', `Bearer ${authToken}`);
    app.close();
  });
});
