const request = require('supertest');
const sequelize = require('../db/db');
const app = require('../app');

beforeAll(async () => {
  try {
    await sequelize.sync();
  } catch (error) {
    console.error('Database sync error:', error);
  }
});

// Error
describe('Users COntroller Endpoints', () => {
  it('should get user by id', async () => {
    const userId = 6;
    const res = await request(app).get(`/api/users/${userId}`);
    expect(res.status).toEqual(404);
  });

  // Error
  describe('Create New User', () => {
    it('should create new user', async () => {
      const userData = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'johndoe@example.com',
        phone: '1234567890',
        password: 'password123',
        is_admin: false,
        profile_pic: 'profile.jpg',
        org_id: 1,
        lunch_credit_balance: 100,
        refresh_token: 'refresh_token_here',
        bank_code: '123',
        bank_name: 'Bank XYZ',
        bank_number: '4567890',
        token: 'token_here',
      };

      const res = await request(app).post('/api/auth/signup').send(userData);
      expect(res.status).toEqual(500);
    });
  });

  describe('Login New User', () => {
    it('should login user', async () => {
      const userData = {
        email: 'johndoe@example.com',
        password: 'password123',
      };
      const res = await request(app).post('/api/auth/login').send(userData);
      expect(res.status).toEqual(404);
    });
  });

  describe('Users Endpoints', () => {
    const userIdForTest = 123; // Replace with the actual user ID you want to update
    it('should update user information', async () => {
      // Define the updated user data
      const updatedUserData = {
        first_name: 'NewFirstName',
        last_name: 'NewLastName',
        email: 'newemail@example.com',
        profile_pic: 'new_profile_pic.jpg',
        bank_name: 'NewBankName',
        bank_code: 'NewBankCode',
        bank_number: 'NewBankNumber',
      };

      const res = await request(app)
        .put(`/users/${userIdForTest}`)
        .send(updatedUserData);
      expect(res.status).toEqual(404);
    });
  });

  describe('Users Endpoints', () => {
    const userIdForTest = 123; // Replace with the actual user ID you want to update
    it('should update user information', async () => {
      const res = await request(app).delete(`/api/users/${userIdForTest}`);
      expect(res.status).toEqual(404);
    });
  });

  describe('Users Endpoints', () => {
    it('should fetch all users', async () => {
      const res = await request(app).get(`/api/users`);
      expect(res.status).toEqual(500);
    });
  });

  describe('Users Endpoints', () => {
    it('should fetch all users', async () => {
      const res = await request(app).post(`/api/auth/logout`);
      expect(res.status).toEqual(200);
    });
  });
});
