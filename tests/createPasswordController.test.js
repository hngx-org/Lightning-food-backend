const request = require('supertest');
const sequelize = require('../db/db');
const app = require('../app');

beforeAll(async () => {
    try {
        await sequelize.sync();
    } catch (error) {
        console.error('Database sync error', error);
    }
});

describe('Update Password API', () => {
    it('should update the user password', async () => {
        const testUserId = 092820892;
        const password = updatedPassword_hash;
        const confirmPassword = updatedPassword_hash;

        const response = await request(app)
            .query({testUserId})
            .patch('/api/users/update-password')
            .send({ password, confirmPassword });

        expect(response.status).toBe(200);
        expect(response.status).toHaveProperty('message', 'Password created successfully');
    });

    it('should return a 400 error if passwords do not match', async () => {
        const testUserId = 092820892;
        const password = updatedPassword_hash;
        const confirmPassword = passwordUpdate_hash; // differs from entry in password field

        const response = await request(app)
            .query({testUserId})
            .patch('/api/users/update-password')
            .send({ password, confirmPassword });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Passwords do not match');
    });

    it('should return a 400 error for missing data', async () => {
        const testUserId = 092820892;
        const password = updatedPassword_hash; // Missing confirmPassword

        const response = await request(app)
            .query({testUserId})
            .patch('/api/users/update-password')
            .send({ password });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Fill all required fields');     
    });
});