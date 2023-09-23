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

describe('Email Validation API', () => {
    it('should validate an email address', async () => {
        const validEmail = 'testemail@example.com';
        const response = await request(app)
            .post('/api/auth/validate')
            .send({email: validEmail});
        
        expect(response.status).toBe(200);
    });

    it('should reject an invalid email address', async () => {
        const invalidEmail = 'invalid-email';
        const response = await request(app)
            .post('/api/auth/validate')
            .send({ email: invalidEmail });

        expect(response.status).toBe(400);
    })
})


describe ('Create User API', () => {
    it('should create a new user', async () => {
        const newUser = {
            first_name: 'test',
            last_name: 'create',
            email: 'testcreate@example.com',
            phone: '02012345678',
            password: 'testpassword_hash',
            is_admin: false,
            profile_pic: 'https://cdn-icons-png.flaticon.com/512/147/147142.png',
            org_id: 976542562576,
            lunch_credit_balance: 1000,
            bank_code: '100011',
            bank_name: 'KeyStone',
            bank_number: '9292929292'
        };
        const response = await request(app)
            .post('/api/auth/signup')
            .send({user: newUser});
        expect(response.status).toBe(200);
        expect(response.body.data).toMatchObject(newUser);
    });

    it('should return a 400 error for missing data', async () => {
        const newUser = { 
            first_name: 'test'
        }; // Missing required params last_name through to bank_name
        const response = await request(app)
            .post('/api/auth/signup')
            .send({user: newUser});

        expect(response.status).toBe(400);
    });
});

describe('User Login API', () => {
    it('should allow a valid user to login', async () => {
        const user = { 
            email: 'testemail@example.com', 
            password: 'testpassword_hash'
        };
        const response = await request(app)
            .post('/api/auth/login')
            .send(user);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'User authenticated sucessfully');
    });

    it('should return a 400 error for missing data', async () => {
        const user = { 
            email: 'testemail@example.com'
        }; // Missing 'password'
        const response = await request(app)
            .post('/api/auth/login')
            .send(user);

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('message', 'fill all required fields');
    });

    it('should return a 404 error for invalid credentials', async () => {
        const user = { 
            email: 'invalidemail@example.com',
            password: 'password_hash'
        }; // email does not exist in DB
        const response = await request(app)
            .post('/api/auth/login')
            .send(user);

        expect(response.status).toBe(404);
        expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });

    it('should return a 401 error for invalid password', async () => {
        const user = {
            email: 'testemail@example.com',
            password: 'invalidPassword_hash'
        }; // password does not exist nor correlate with DB
        const response = await request(app)
            .post('/api/auth/login')
            .send(user);

        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('message', 'Invalid credentials');
    });
});

describe('Logout API', () => {
    it('should allow an authenticated user to log out', async () => {
        const token = 'userToken';
        const response = await request(app)
            .post('/api/auth/logout')
            .set('token', token);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'User logged out successfully');
    });

    it('should return a 401 error for missing token', async () => {
        const response = await request(app)
            .post('/api/auth/logout');
        
        expect(response.status).toBe(401);
        expect(response.body).toHaveProperty('message', 'User is not logged in');
    });
});

describe('Create Org and User API', () => {
    it('should create an organization and admin user', async () => {
        const adminUser = {
            first_name: 'adminName',
            last_name: 'adminLastName',
            email: 'admintest@example.com',
            phone: '01012345678',
            password: '5f4dcc3b5aa765d61d8327deb882cf99',
            is_admin: true,
            org_id: 976542562576,
            lunch_credit_balance: 10000,
        };
        const response = await request(app)
            .post('/api/auth/signup/org-user')
            .send(adminUser);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'Org and User registered successfully');
        expect(response.body.data).toMatchObject(adminUser);
    });

    it('should return a 400 error for missing data', async () => {
        const adminUser = {
            fisrt_name: 'adminName'
        }; // Missing required params email, password, org_name and lunch_price
        const response = await request(app)
            .post('/api/auth/signup/org-user')
            .send(adminUser);
        
        expect(response.status).toBe(400);
    });
});