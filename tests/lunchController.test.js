require('dotenv').config();
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

describe('Retrieve available lunches for a user', () => {

    it('should return an empty array for a user with no lunch data', async () => {
        const testUserId = '9339'; //user is with no lunch data

        const response = await request(app)
            .get(`/api/lunch/${testUserId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'No lunches found for this user');
    });

    it('should retrieve all available lunches for a user by the user id', async () => {
        const testUserId = '29292';

        const response = await request(app)
            .query({testUserId})
            .get(`/api/lunch/${testUserId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Lunches retrieved successfully');
    });

    it('should return a 500 error for missing user ID', async () => {
        const testUserId = '';
        const response = await request(app)
            .get(`/api/lunch/${testUserId}`);

        expect(response.status).toBe(500);
    });

});

describe('Send Lunch API', () => {
    it('should send lunch to a user', async () => {
        const testReceiverId = '9302302'; //user id you want to send lunch to
        const testQuantity = 2; 
        const testNote = 'Well deserved';
        
        const response = await request(app)
            .post('/api/lunch/send')
            .send({ testReceiverId, testQuantity, testNote });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Lunch sent successfully');
    });

});

describe('Redeem Lunch API', () => {
    it('should redeem lunch into bank account', async () => {
        const bank_code = '100110';
        const bank_name = 'KeyStone';
        const bank_number = '0123456789';
        const amount = 2;
        const email = 'testemail@example.com';
        const user_id = 203930303;

        const response = await request(app)
            .query({user_id})
            .post('/api/lunch/redeem')
            .send({ bank_code, bank_name, bank_number, amount, email });

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('message', 'Withdrawal request created successfully');
    });

    it('should return a 400 error for missing data', async () => {
        const bank_code = '100110'; // Missing bank_name, bank_number, amount and email
        const user_id = 203930303;

        const response = await request(app)
            .query({user_id})
            .post('/api/lunch/redeem')
            .send({ bank_code });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Please provide all required fields');
    });
});

describe('Get Lunch Details API', () => {
    it('should retrieve lunch details by lunch id', async () => {
        const testLunchId = '38292';

        const response = await request(app)
            .get(`/api/lunch/${testLunchId}`);
        
        expect(response.status).toBe(200);
    });

    it('should return a 404 error for missing lunch details', async () => {
        const testLunchId = '0101010' // Lunch Id which doesn't contain lunch data

        const response = await request(app)
            .get(`/api/lunch/${testLunchId}`);

        expect(response.status).toBe(404);
    })
});