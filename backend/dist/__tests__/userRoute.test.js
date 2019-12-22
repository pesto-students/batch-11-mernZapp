"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('User authentication flow', () => {
  it('should create a new user', async () => {
    const res = await (0, _supertest.default)(_index.default).post('/users/create').send({
      email: 'demo1@gmail.com',
      password: 'harish'
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    const {
      token
    } = res.body;
    const resDelete = await (0, _supertest.default)(_index.default).delete('/users/me').set('Authorization', `Bearer ${token}`);
    expect(resDelete.statusCode).toEqual(200);
  });
  it('should create a new user and log-in and logout', async () => {
    const res = await (0, _supertest.default)(_index.default).post('/users/create').send({
      email: 'demo3@gmail.com',
      password: 'harish'
    });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('user');
    const resLogin = await (0, _supertest.default)(_index.default).post('/users/login').send({
      email: 'demo3@gmail.com',
      password: 'harish'
    });
    expect(resLogin.statusCode).toEqual(200);
    expect(resLogin.body).toHaveProperty('user');
    const tokenNew = resLogin.body.token;
    const resLogout = await (0, _supertest.default)(_index.default).post('/users/logout').set('Authorization', `Bearer ${tokenNew}`).send();
    expect(resLogout.statusCode).toEqual(200);
    const resLogoutWithoutLogin = await (0, _supertest.default)(_index.default).post('/users/logout').set('Authorization', `Bearer ${tokenNew}`).send();
    expect(resLogoutWithoutLogin.body.error).toEqual('please authenticate');
    const resLogin2 = await (0, _supertest.default)(_index.default).post('/users/login').send({
      email: 'demo3@gmail.com',
      password: 'harish'
    });
    expect(resLogin2.statusCode).toEqual(200);
    expect(resLogin2.body).toHaveProperty('user');
    const tokenLogin2 = resLogin2.body.token;
    const resDelete = await (0, _supertest.default)(_index.default).delete('/users/me').set('Authorization', `Bearer ${tokenLogin2}`);
    expect(resDelete.statusCode).toEqual(200); // delete that user

    afterEach(async () => {});
  });
});