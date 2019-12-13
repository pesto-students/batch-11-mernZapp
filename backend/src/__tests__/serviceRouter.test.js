import request from 'supertest';
import app from '../index';

describe('Should return services and actions accordingly', () => {
  test('should return the list of services', async () => {
    const res = await request(app)
      .get('/services')
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('services');
    expect(res.body.services).toEqual(['github']);
  });

  test('should return the actions for github service', async () => {
    const res = await request(app)
      .get('/actions/github')
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('actions');
    expect(res.body.actions).toHaveLength(1);
  });

  test('should return the triggers for github service', async () => {
    const res = await request(app)
      .get('/triggers/github')
      .send();

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('triggers');
    expect(res.body.triggers).toHaveLength(1);
  });
});
