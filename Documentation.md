## Base URL

`https://hng-task2-vc39.onrender.com `

## Auth Endpoints

1. ### createUser
   Request

#### HTTP Method: POST

#### Endpoint: /api/auth/signup

#### Request Format:

```json
{
  "first_name": "John",
  "last_name": "Doe",
  "email": "johndoe@example.com",
  "phone": "1234567890",
  "password": "secretpassword"
}
```

Response

#### HTTP Status Code: 201 Created

#### Response Format:

```json
{
  "success": true,
  "message": "User registered successfully",
  "data": {
    "user": "userWithoutPassword"
  }
}
```

2. ### Login User
   Request

#### HTTP Method: POST

#### Endpoint: /api/auth/login

#### Request Format: Include both email and password in the request body.

Response

#### HTTP Status Code: 200 OK

#### Response Format:

```json
{
  "message": "User authenticated successfully",
  "statusCode": 200,
  "data": {
    "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MiwiaWF0IjoxNjk0ODY1NDk4LCJleHAiOjE2OTQ5NTE4OTh9.gfaVNU1ffhauLWhPoiO3-1MJFzV26FmRlVGT_GqkfJo",
    "email": "nazahng@gmail.com",
    "id": "user.id",
    "is_admin": true
  }
}
```

3. ### Update Developer
   Request

#### HTTP Method: PUT

#### Endpoint: /api?id={developer_id}

#### Request Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

```
{
  "firstname": "Jane",
  "lastname": "Doe"
}
```

Response

#### HTTP Status Code: 200 OK

#### Response Format:

```
{
  "id": 1,
  "firstname": "Jane",
  "lastname": "Doe"
}
```

## Lunch Endpoints

1. ### Get all lunch
   Request

## Description

The getAllLunch function retrieves all available lunches for a user. It queries the lunch model to find lunches where the user is either the sender or receiver.
Response

#### HTTP Method: POST

#### Endpoint: api/lunch/user/:userId/lunch/all

#### Request Format: Include the user id in the request parameter.

#### HTTP Status Code: 200 OK

#### Response Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

```json
{
  "success": true,
  "message": "Lunches retrieved successfully",
  "data": "allLunches"
}
```

## Functionality

1. Extracts the user's ID from the JWT token in the request header.
2. Queries the Lunch model to find available lunches for the user where the user is either the sender or receiver.
3. If no lunches are found, it responds with a success message indicating that no lunches were found for the user.
4. If lunches are found, it responds with a success message and the retrieved lunch data in JSON format.

5. ### Send Lunch

### Description

The sendLunch function is responsible for sending a lunch from the current user to another user. It creates a new lunch entry in the database and updates the balances of both the sender and receiver.

#### HTTP Method: POST

#### Endpoint: /api/lunch

#### Request Format: Include the reciever id, quantity and the note in the request body.

#### HTTP Status Code: 200 OK

#### Response Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

```json
{
  "success": true,
  "message": "Lunche sent successfully",
  "data": "lunch"
}
```

## Functionality

1. Extracts the receiverId, quantity, and note from the request body.
2. Creates a new lunch entry in the Lunch model with the sender's ID (obtained from the JWT token) and the provided receiver ID, quantity, and note.
3. Retrieves the sender and receiver user records from the User model.
4. Updates the sender's balance by subtracting the lunch quantity.
5. Updates the receiver's balance by adding the lunch quantity.
   6.Responds with a success message indicating that the lunch was sent successfully, along with the details of the created lunch entry.

## Organization Endpoints

1. ### create Organization
   Request

#### HTTP Method: POST

#### Endpoint: /api/organization/create

#### Request Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

```json
{
  "name": "Zuri",
  "launch_price": 1000,
  "currency_code": "NGN"
}
```

Response

#### HTTP Status Code: 201 Created

#### Response Format:

```json
{
  "success" : true,
  "message": "Organization and Lunch wallet created successfully",
  "data": {
    "user": "organization" {
        "name": "Zuri",
        "launch_price": "1000",
        "currency_code": "NGN"
    },
        "launchWallet" {
            "org_id": 2348,
            "balance": 10000
        }
  }
}

```

2. ### Send Invite
   Request

#### HTTP Method: POST

#### Endpoint: /api/organization/send-invite

#### Request Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

```json
{
  "email": "Zuriteam@gmail.com",
  "organizationId": 234278
}
```

Response

#### HTTP Status Code: 200 Success

#### Response Format:

```json
{
  "success": true,
  "message": "Invitation sent successfully",
  "data": null
}
```

3. ### Update Organization Details
   Request

#### HTTP Method: POST

#### Endpoint: /api/organization/update-info

#### Request Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

```json
{
  "name": "HNG",
  "lunch_price": 2000,
  "currency": "NGN"
}
```

Response

#### HTTP Status Code: 201 Success

#### Response Format:

```json
{
  "organization": {
    "name": "HNG",
    "lunch_price": 2000,
    "currency": "NGN"
  }
}
```

## Users Endpoints

1. ### Get user by Id
   Request

#### HTTP Method: GET

#### Endpoint: /api/users/:id

#### Request Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

Response

#### HTTP Status Code: 200 Success

#### Response Format:

```json
{
  "success": true,
  "message": "User found",
  "data": {
    "user": "user"
  }
}
```

2. ### Get all users
   Request

#### HTTP Method: GET

#### Endpoint: /api/users

#### Request Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

Response

#### HTTP Status Code: 200 Success

#### Response Format:

```json
{
  "success" : true,
  "message": "List of all users",
  "data": {
    "users"
  }
}

```

3. ### Update Organization Details
   Request

#### HTTP Method: POST

#### Endpoint: /api/organization/update-info

#### Request Format:

`Content-Type: application/json`
`Authorization: Bearer <admin_token>`

```json
{
  "name": "HNG",
  "lunch_price": 2000,
  "currency": "NGN"
}
```

Response

#### HTTP Status Code: 201 Success

#### Response Format:

```json
{
  "organization": {
    "name": "HNG",
    "lunch_price": 2000,
    "currency": "NGN"
  }
}
```

## Setup and Deployment

To set up and deploy this API locally or on a server, follow these steps:

Clone the repository from GitHub.

Install Node.js and npm if not already installed.

Navigate to the project directory and run the following command to install dependencies:

`npm install`

Set up a database connection in the knex-db/knex.js file.
Run the following command to migrate the database:

`npm run knex migrate:latest`

Start the API server with the following command:
npm start

The API will be accessible at http://localhost:3000 by default.

This documentation outlines the usage, endpoints, and setup instructions for the My Developer API. If you have any questions or need further assistance, please contact our support team at fredrickraymnd2004@gmail.com.
