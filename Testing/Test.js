const request = require('supertest');
const app = require('../index'); // Update the path accordingly

describe('GET /api/headphones', () => {
  it('should retrieve all headphones', async () => {
    const response = await request(app).get('/api/headphones');
    expect(response.status).toBe(200);
    expect(response.body).toHaveLength(2); // Adjust as per your test data
  });
});
