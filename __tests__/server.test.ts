// eslint-disable-next-line import/no-extraneous-dependencies
import supertest from 'supertest';
import express from 'express';
import App from '../src/app';

let app: express.Application;
const data = { data: 'JOHN0000MICHAEL0009994567' };

beforeAll(() => {
  app = new App().app;
});

test('v1 handles body request', async () => {
  const res = await supertest(app)
    .post('/api/v1')
    .set('Accept', 'application/json')
    .send(data);

  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual({
    firstName: 'JOHN0000',
    lastName: 'MICHAEL000',
    clientId: '9994567',
  });
});

test('v2 handles body request', async () => {
  const res = await supertest(app)
    .post('/api/v2')
    .set('Accept', 'application/json')
    .send(data);

  expect(res.status).toBe(200);
  expect(res.body).toStrictEqual({
    firstName: 'JOHN',
    lastName: 'MICHAEL',
    clientId: '999-4567',
  });
});
