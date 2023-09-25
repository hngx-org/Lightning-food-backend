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

describe('Create Organization API', () => {
    it('should create a new organization', async () => {
        const newOrg = {
            name: 'testOrg',
            lunch_price: 1234.56,
            currency_code: 'NGN'
        };
        const response = await request(app)
            .post('/api/organization/create')
            .send(newOrg);

        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('mssage', 'Organization and Lunch Wallet created successfully');
    });

    it('should return a 400 error for missing data', async () => {
        const newOrg = {
            lunch_price: 1234.56
        }; // Missing required params name and currency_code
        const response = await request(app)
            .post('/api/organization/create')
            .send(newOrg);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Missing required fields');
    });
});

describe('Send Invite Code API', () => {
    it('should send an invite code to user email', async () => {
        const email = 'testemail@example.com';
        const org_id = '976542562576';
        const token = 'userToken';
        
        const response = await request(app)
            .post('/api/organization/send-invite')
            .send({ email, org_id, token });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Invitation sent successfully');
    });

    it('should return a 400 error for missing email or org_id ', async () => {
        const email = 'testemail@example.com'; // Missing org_id

        const response = await request(app)
            .post('/api/organization/send-invite')
            .send(email);

        expect(response.status).toBe(400);
    });

    it('should return a 400 error for missing token', async () => {
        const email = 'testemail@example.com';
        const org_id = '976542562576'; // Missing token

        const response = await request(app)
            .post('/api/organization/send-invite')
            .send({ email, org_id});

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Verification code is required');
    });

    it('should return a 400 error for invalid token', async () => {
        const email = 'testemail@example.com';
        const org_id = '976542562576';
        const token = 'invalidToken';

        const response = await request(app)
            .post('/api/organization/send-invite')
            .send({ email, org_id, token });

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'Invalid verification code');
    });
});

describe('Update Organization Details API', () => {
    it('should update organization details for an admin user', async () => {
        const name = 'updatedName';
        const lunchPrice = 987.65;
        const currency = 'USD';

        const response = await request(app)
            .put('/api/organization/update-info')
            .query({is_admin: 'true'})
            .send({ name, lunchPrice, currency });

        expect(response.status).toBe(201);
        expect(app.organization.name).toBe('updateName');
    });

    it('should return a 403 error for a non-admin user', async () => {
        const name = 'UpdatedName';
        const lunchPrice = 12.34;
        const currency = 'AUD';

        const response = request(app)
            .put('/api/organization/update-info')
            .query({is_admin: 'false'})
            .send({ name, lunchPrice, currency });

        expect(response.status).toBe(403);
    });
});