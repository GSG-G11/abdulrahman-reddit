const supertest = require('supertest');
const app = require('../app');
const connection = require('../database/config/connection');
const { dbBuild } = require('../database/config/build');
const { describe } = require('../utils/validation/signUpSchema');

test('signUp: should return status 200', (done) => {
  supertest(app)
    .get('/signUp')
    .expect(200).end((err) => {
      if (err) return done(err);
      return done();
    });
});

test('signUp: should return status 201', (done) => {
  supertest(app)
    .post('/signUp')
    .send({
      name: 'mahmoud',
      email: 'm@m.com',
      password: 'aaAA12',
      confirmPassword: 'aaAA12',
    })
    .expect(201)
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});
test('login: should return status 200', (done) => {
  supertest(app)
    .get('/login')
    .expect(200)
    .expect('Content-Type', 'text/html; charset=UTF-8')
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});

test('login: should return status 200', (done) => {
  supertest(app)
    .post('/login')
    .send({ email: 'q@q.com', password: 'aaAA12' })
    .expect(200)
    .expect('Content-Type', 'application/json; charset=utf-8')
    .end((err) => {
      if (err) return done(err);
      return done();
    });
});
