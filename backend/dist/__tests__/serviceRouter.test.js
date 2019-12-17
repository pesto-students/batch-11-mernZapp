"use strict";

var _supertest = _interopRequireDefault(require("supertest"));

var _index = _interopRequireDefault(require("../index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Should return services and actions accordingly', () => {
  test('should return the list of services', async () => {
    const res = await (0, _supertest.default)(_index.default).get('/services').send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('services');
    expect(res.body.services).toEqual(['github']);
  });
  test('should return the actions for github service', async () => {
    const res = await (0, _supertest.default)(_index.default).get('/actions/github').send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('actions');
    expect(res.body.actions).toHaveLength(1);
  });
  test('should return the triggers for github service', async () => {
    const res = await (0, _supertest.default)(_index.default).get('/triggers/github').send();
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('triggers');
    expect(res.body.triggers).toHaveLength(1);
  });
});