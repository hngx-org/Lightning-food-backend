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

describe('Withdraw Cash API', () => {
    it('should withdraw to user bank info', async () => {
        const bank_code = '1011100';
        const bank_name = 'KeyStone';
        const bank_number = '0987654321';
        const amount = 2;

        const response = await request(app)
            .query({user_id})
            .post('/api/withdrawal/request')
            .send({ bank_code, bank_name, bank_number, amount });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Withdrawal request created successfully');
    });

    it('should return a 401 error for missing data', async () => {
        const bank_code = 10010011; // Missing bank_name, bank_number and amount

        const response = await request(app)
            .query({user_id})
            .post('/api/withdrawal/request')
            .send({ bank_code });

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('message', 'Please provide required field');
    });
});

describe('Withdrawal history API', () => {
    it('should retrieve the withdrawal history of a user by user_id', async () => {
        const testUserId = 283798339;

        const response = await request(app)
            .query({testUserId})
            .get('/api/withdrawal/all')
        
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Withdrawal History');
    });
});