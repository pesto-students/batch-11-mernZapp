import request from 'supertest';
import app from '../index';
import { GITHUB_TEST_AUTH_TOKEN } from '../config';

describe('User authentication flow', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users/create')
      .send({
        email: 'demo1@gmail.com',
        password: 'harish',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    const { token } = res.body;
    const resDelete = await request(app)
      .delete('/users/me').set('Authorization', `Bearer ${token}`);
    expect(resDelete.statusCode).toEqual(200);
  }); it('should create a new user and log-in and logout', async () => {
    const res = await request(app)
      .post('/users/create')
      .send({
        email: 'demo3@gmail.com',
        password: 'harish',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user'); const resLogin = await request(app)
      .post('/users/login')
      .send({
        email: 'demo3@gmail.com',
        password: 'harish',
      });
    expect(resLogin.statusCode).toEqual(200);
    expect(resLogin.body).toHaveProperty('user');
    const tokenNew = resLogin.body.token; const resLogout = await request(app)
      .post('/users/logout')
      .set('Authorization', `Bearer ${tokenNew}`)
      .send();
    expect(resLogout.statusCode).toEqual(200); const resLogoutWithoutLogin = await request(app)
      .post('/users/logout')
      .set('Authorization', `Bearer ${tokenNew}`)
      .send();
    expect(resLogoutWithoutLogin.body.error).toEqual('please authenticate'); const resLogin2 = await request(app)
      .post('/users/login')
      .send({
        email: 'demo3@gmail.com',
        password: 'harish',
      });
    expect(resLogin2.statusCode).toEqual(200);
    expect(resLogin2.body).toHaveProperty('user');
    const tokenLogin2 = resLogin2.body.token; const resDelete = await request(app)
      .delete('/users/me').set('Authorization', `Bearer ${tokenLogin2}`);
    expect(resDelete.statusCode).toEqual(200);
  });
}); describe('User authentication flow', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users/create')
      .send({
        email: 'demo1@gmail.com',
        password: 'harish',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    const { token } = res.body; const resAddAuthToken = await request(app)
      .post('/user/add-token')
      .set('Authorization', `Bearer ${token}`)
      .send({
        service: 'github',
        token: GITHUB_TEST_AUTH_TOKEN,
      });
    expect(resAddAuthToken.statusCode).toEqual(200); const resDelete = await request(app)
      .delete('/users/me').set('Authorization', `Bearer ${token}`);
    expect(resDelete.statusCode).toEqual(200);
  });
}); describe('User authentication flow', () => {
  it('should create a new user', async () => {
    const res = await request(app)
      .post('/users/create')
      .send({
        email: 'demo1@gmail.com',
        password: 'harish',
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    const { token } = res.body; const resAddAuthToken = await request(app)
      .post('/user/add-token')
      .set('Authorization', `Bearer ${token}`)
      .send({
        service: 'github',
        token: GITHUB_TEST_AUTH_TOKEN,
      });
    expect(resAddAuthToken.statusCode).toEqual(200); const resDelete = await request(app)
      .delete('/users/me').set('Authorization', `Bearer ${token}`);
    expect(resDelete.statusCode).toEqual(200);
  });
});
