// TESTING THE SERVER WITH SUPERTEST

// import supertest for mock calls to API
const request = require('supertest');

// import server
const server = require('./server');

// what can we test?
// DB_ENV is correct
// HTTP status code
// format of data (JSON)
// shape of response body

describe('server.js', () => {
  it('should run tests', () => {
    expect(process.env.DB_ENV).toBe('testing');
  });

  describe('GET /', () => {
    // This needs async otherwise it will pass regardless
    it.skip('should return 200 OK', () => {
      request(server)
        .get('/')
        .then(res => expect(res.status).toBe(500));
    });

    // Async method
    it('should return 200 OK using async', async () => {
      const res = await request(server).get('/');

      expect(res.status).toBe(200);
    });

    it('should return JSON', async () => {
      const res = await request(server).get('/');

      expect(res.type).toBe('application/json');
    });

    it('should return {api: "up"}', async () => {
      const res = await request(server).get('/');

      expect(res.body).toEqual({ api: 'up' });
    });
  });
});
