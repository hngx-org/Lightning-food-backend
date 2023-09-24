# Free Lunch App
A NodeJS-MYSQL based application design by Team-Lightning in the HNG-X Internship, September 2023

### Overview
Click and navigate to any section of your choice.

- [Free Lunch App](#free-lunch-app)
    - [Overview](#overview)
  - [Getting Started](#getting-started)
  - [API Documentation Summary](#api-documentation-summary)
    - [Endpoint Consumption Summary Table](#endpoint-consumption-summary-table)
    - [Request Methods Response Formats and Status Codes Used](#request-methods-response-formats-and-status-codes-used)
    - [Models, ERD and Database SetUp](#models-erd-and-database-setup)
    - [Simple Setup Instructions](#simple-setup-instructions)
    - [Sample API Usage](#sample-api-usage)
  - [Request and Response Formats for Endpoint Testing](#request-and-response-formats-for-endpoint-testing)
    - [Registering a New User Account](#registering-a-new-user-account)
    - [Logging in A User](#logging-in-a-user)
    - [Updating A User](#updating-a-user)
    - [Sending Lunch](#sending-lunch)
    - [Redeeming Lunch](#redeeming-lunch)
    - [Updating User Password](#updating-user-password)
  - [Environmental Variables](#environmental-variables)
  - [Major Packages and Dependencies](#major-packages-and-dependencies)
  - [Contributors](#contributors)

## Getting Started

Create an organization, invite your staff and allow them gift free lunch to one another. This project is intended to serve as Stage-3 task for the HNG-X internship program. This application basically exploits the functionalities of a `REST` architecture and the `MySQL` Relational Database. There are two major types of `users` in this app:
- An Admin-User
- A Normal-User

To begin, an `admin-user` first signs up and creates an organization. The admin will then send invites to staff members (`normal-user`) and after verification, each staff will need to create an account with the organization name and carry out further operations under the umbrella of that organization. A `normal-user` cannot be registered and/or use the application unless an invite has been received and verified from the organization under which the user intends to register. Only the `admin-user` has privileges of performing full `CRUD` operations on all users in his organization.

The two major actions in this application is:
- Gifting a lunch
- Redeeming a lunch

A user can `gift` a free lunch from the organization's collection to another user. The other user is then left with the option to `redeem` the lunch. By redeeming the lunch, he can withdraw the corresponding amount of the lunch to his/her bank account.

Multiple organizations can be hosted on this application. It is like a social-media hub for gifting free lunch. Explore more about this app below.

## API Documentation Summary
The `REST API` architecture of this application is implemented using `Node-js` and `Express`.
This API is equipped with functionalities to dynamically handle request/responses on various endpoints/resources of this application. To access some endpoint/resource, a user might be required to have a form of authentication and authorization which is implemented by consuming the vast functionalities of  `Jason Web Tokens` (JWT). The key `API` endpoint set-up is explained in the titles below:

- [Free Lunch App](#free-lunch-app)
    - [Overview](#overview)
  - [Getting Started](#getting-started)
  - [API Documentation Summary](#api-documentation-summary)
    - [Endpoint Consumption Summary Table](#endpoint-consumption-summary-table)
    - [Request Methods Response Formats and Status Codes Used](#request-methods-response-formats-and-status-codes-used)
    - [Models, ERD and Database SetUp](#models-erd-and-database-setup)
    - [Simple Setup Instructions](#simple-setup-instructions)
    - [Sample API Usage](#sample-api-usage)
  - [Request and Response Formats for Endpoint Testing](#request-and-response-formats-for-endpoint-testing)
    - [Registering a New User Account](#registering-a-new-user-account)
    - [Logging in A User](#logging-in-a-user)
    - [Updating A User](#updating-a-user)
    - [Sending Lunch](#sending-lunch)
    - [Redeeming Lunch](#redeeming-lunch)
    - [Updating User Password](#updating-user-password)
  - [Environmental Variables](#environmental-variables)
  - [Major Packages and Dependencies](#major-packages-and-dependencies)
  - [Contributors](#contributors)

### Endpoint Consumption Summary Table

|s/n| Name of Endpoint | Endpoint Link | Endpoint Method | Endpoint Description | Access |
|:--|:---------------- |:-------------:|:---------------:|:----------- |:---------------:|
|   |                  |_**Authentication Routes**_ (`/api/auth`)||
|1.| Create/Sign-up Organization-User | `/api/auth/signup/org-user` | `POST` | Creates organization account | _Admin_ |
|2.| Create/Sign-up User | `/api/auth/signup` | `POST` |Creates a user account| _Admin/User_|
|3.| Login User  | `/api/auth/login` | `POST` | Logs in a user (admin allowed)| _Admin/User_|
|4.| Logout User | `/api/auth/logout` | `POST` |Logs out a user out| _Admin/User_|
|   |                  |_**User Routes -CRUD**_ (`/api/users`)||
|5.| Get Me | `/api/users/me` | `GET` |Fetches a user profile| _Admin/User_ |
|6.| Get User by id | `/api/users/:id` | `GET` |Finds a user by id| _Admin/User_ |
|7.| Get All Users | `/api/users/` | `GET` |Finds all users for an organization| _Admin_ |
|8.| Forget Password | `/api/users/forget-password` | `POST` |Initiates reseting procedures| _Admin/User_ |
|9.| Reset Password | `/api/users/reset-password` | `PATCH` |Resets User Password| _Admin/User_ |
|10.| Update/Change Password | `/api/users/update-password` | `PATCH` |Creates a new User Password| _Admin/User_ |
|11.| Update User | `/api/user/:id` | `PUT` |Updates a user by id| _Admin/User_ |
|12.| Delete User| `/api/users/:id` | `DELETE` |Deletes a user| _Admin/User_ |
|13.| Logout User | `/api/auth/logout` | `POST` |For loggin a user out| _Admin/User_ |
|   |                  |_**Organization Routes**_ (`/api/organization`)||
|14.| Create Organization| `/api/organization/create`| `POST`| Creates new organization | _Admin_ |
|15.| Confirm Invite | `/api/organization/confirm-invite` | `POST`| Confirms invite to an org. | _Admin_ |
|16.| Send Invite | `/api/organization/send-invite` | `POST`| Sends user an invite to join org. | _Admin_ |
|17.| Update Organization | `/api/organization/update-info` | `PUT`| Updates the organization details | _Admin_ |
|   |                  |_**Lunch Routes**_ (`/api/lunch`)||
|18.| Get All Lunch | `/api/lunch/` | `GET`| Fetches all available lunch | _Admin/User_ |
|19.| Gift Lunch | `/api/lunch/send` | `POST`| Send lunch to a user | _Admin/User_ |
|20.| Get Lunch Detail | `/api/lunch/:lunchId` | `GET`| Fetches details for a lunch by id | _Admin/User_ |
|21.| Get Lunch by UserID | `/api/lunch/user/:userId` | `GET`| Fetches lunch for a user by id | _Admin/User_ |
|   |                  |_**Withdrawal[Redeem] Routes**_ (`/api/withdrawals`)||
|22.| Redeem Lunch | `/api/withdrawals/withdraw` | `POST`| withdraws the monetary value for a lunch | _Admin/User_ |
|23.| Withdrawal History | `/api/withdrawals/history` | `GET`| withdraws the monetary value for a lunch | _Admin/User_ |

### Request Methods Response Formats and Status Codes Used

|S/N | Request Methods | Description |
|:---|:---------------:|:------------|
|1. | `GET` | Fetch item(s) |
|2. | `POST` | Send item(s) |
|3. | `PUT` | Update item(s) |
|4. | `DELETE` | Remove or Delete item(s) |

|S/N | Status Code | Description |
|:---|:---------------:|:------------|
|1. | `200` |  `OK` |
|2. | `201` | `CREATED` |
|3. | `400` | `BAD REQUEST` |
|4. | `401` | `UNAUTHORIZED` |
|5. | `403` | `FORBIDDEN` |
|6. | `404` | `NOT FOUND` |
|7. | `500` | `INTERNAL SERVER ERROR` |

Responses are all sent frontend in `JSON` format for each request.

### Models, ERD and Database SetUp
The database this `API` interfaces with is `MYSQL`. Visit this [link](https://drawsql.app/teams/benrobo/diagrams/free-lunch) to access our models and ERD format

### Simple Setup Instructions
To begin to test this application, first clone the directory where the `app.js` file resides.
```
git clone url
```
After cloning the directory, install the dependencies on your local system using the command:
```
npm install
```
The package dependencies and dev dependencies will now be installed in your local environment. Run the command to start the application:
```
nodemon app.js
```
The application starts running and listening on the port defined in `process.env.PORT`. A message will be printed on the console to show that your app is running and has connected to the database. You can access the `MYSQL` database from the `CLI`, on a hosted cloud platform or any `MYSQL` server such as the one provided by `MYSQL` workbench.

### Sample API Usage
The Requests and Responses in the [next section](#request-and-response-formats-for-endpoint-testing) demonstrates the testing and use of some core functionalities in the `Free Lunch App API`.

## Request and Response Formats for Endpoint Testing
We will demonstrate the performance of `requests` and reception of `responses` on some select `endpoints`: `Register a User`, `Login`, `Update a User`, `Send Lunch`, `Redeem Lunch` and `Updating User Password` as these describes the core functionality of the `Free Lunch Application`.

Navigate to any section of your choice or kindly stick to the flow!

- [Registering a New User Account](#registering-a-new-user-account)
- [Logging in A User](#logging-in-a-user)
- [Updating A User](#updating-a-user)
- [Sending Lunch](#sending-lunch)
- [Redeeming Lunch](#redeeming-lunch)
- [Updating User Password](#updating-user-password)

### Registering a New User Account
- **Endpoint**: `/api/auth/signup`
- **Method**: `POST`
- **Description**: The steps for initializing a new user who has been granted access via invite.
- **Request Body**:
```
{
    "first_name" : "Mark"
    "last_name" : "Essien"
    "email": "markessien1000@hng.org"
    "phone" : "1234567890"
    "org_id" : "some_id"
    "password" : "a-good-password"
    "lunch_credit_balance" : 1000
    "is_admin" : false
    "bank_code" : "B-CODE"
    "bank_name" : "B-NAME"
    bank_number : "ACCOUNT-NUMBER"
}
```

- **Response Body `JSON`**:
- **Status Code**: `201`
```
{
    "success": true,
    "message": "User registered successfully",
    "data": {
            "user": newUser,
    },
}
```

### Logging in A User
- **Endpoint**: `/api/auth/login`
- **Method**: `POST`
- **Description**: The steps for logging in a user who has created an account under an organization.
- **Request Body**:
```
{
    "email": "markessien1000@hng.org"
    "password" : "a-good-password"
}
```

- **Response Body `JSON`**:
- **Status Code**: `200`
```
{
    "success": true,
    "message": "User authenticated successfully",
    "data": {
            "user": user,
    },
}
```
### Updating A User
- **Endpoint**: `/api/user/:userId`
- **Method**: `PUT`
- **Description**: The steps for upating a user who already has an account with the organization. Any field not provided in the body as shown will remain unchanged from it's previous value.
- **Request Body**:
```
{
    "first_name" : "MyNewFirstName",
    "last_name" : "MyNewSurname",
    "email": "mynewemail@hng.org",
    "profile_pic" : "LINK-to-PIC",
    "bank_name" : "NewBankName",
    "bank_code" : "NEW-BANK-CODE",
    "bank_number" : "NEW-ACCOUNT-NUMBER",
}
```

- **Response Body `JSON`**:
- **Status Code**: `200`
```
{
    "success" : true,
    "message" : "User updated successfully",
    "data" : {
        "user" : user,
    },
}
```

### Sending Lunch
- **Endpoint**: `/api/lunch/send`
- **Method**: `POST`
- **Description**: The steps for sending lunch to a user who's id is known.
- **Request Body**:
```
{
    "receiverId" : "THE-RECEIVER-ID",
    "quantity" : 2,
    "note: "With hearetfelt care, I send you this gift. You've been a wonderful staff!",
}
```

- **Response Body `JSON`**:
- **Status Code**: `200`
```
{
    "success" : true,
    "message" : "Lunch sent successfully",
    "data" : {
      "sender_id" : "ID-OF-SENDER",
      "receiver_id": "THE-RECEIVER-ID",
      quantity : 2,
      "note" : "With hearetfelt care, I send you this gift. You've been a wonderful staff!"
    }
}
```

### Redeeming Lunch
- **Endpoint**: `/api/withdrawals/withdraw`
- **Method**: `POST`
- **Description**: The steps for redeeming/withdrawing lunch-monetary value to a user's bank account.
- **Request Body**:
```
{
    "bank_number" : "ACCOUNT-NUMBER",
    "bank_name" : "BANK-NAME",
    "bank_code" : "BANK-CODE",
    "amount" : 2
}
```

- **Response Body `JSON`**:
- **Status Code**: `200`
```
{
    "message" : "Withdrawal request created successfully",
    "statusCode" : 201,
      "data" : {
        "id" : "ID-OF-DB-FIELD",
        "user_id": "USER-ID",
        "status" : "success",
        "amount" : 2,
        "created_at" : "TIME OF COMPLETION OF WITHDRAWAL",
      }
}
```

### Updating User Password
- **Endpoint**: `/api/users/update-password`
- **Method**: `PATCH`
- **Description**: The steps for changing or updating a user's password.
- **Request Body**:
```
{
    "confirmPassword" : "PASS-MUST-MATCH",
    "password" : "PASS-MUST-MATCH",
}
```

- **Response Body `JSON`**:
- **Status Code**: `200`
```
{
    "message" : "Password created successfully",
    "statusCode" : 200,
}
```

Visit this [link](url) to view more about the `API` (request, response and endpoints) on `Swagger.io`

## Environmental Variables
For effectively testing the API, these credentials were setup in the `.env` file in the root of the repo:
```
`MYSQL_ADDON_HOST=bfjkcttl9owdewhqjpjf-mysql.services.clever-cloud.com`
`MYSQL_ADDON_DB=bfjkcttl9owdewhqjpjf`
`MYSQL_ADDON_USER=uzq1wq0wnpsg6cvu`
`MYSQL_ADDON_PORT=3306`
`MYSQL_ADDON_PASSWORD=2PcRLWSJAxvJhbWX2ZNr`
`MYSQL_ADDON_URI=mysql://uzq1wq0wnpsg6cvu:2PcRLWSJAxvJhbWX2ZNr@bfjkcttl9owdewhqjpjf-mysql.services.clever-cloud.com:3306/bfjkcttl9owdewhqjpjf`
`JWT_SIGNATURE= *QSJfus1TOH2fSHw41Ifo0LMN2fzeQD*`
```

## Major Packages and Dependencies
- `dotenv`
- `express`
- `nodemon`
- `nodemon`
- `sequelize`
- `helmet`
- `jsonwebtoken`
- `bcrypt`
- `http-errors`
- `husky`
- `morgan`
- `mysql2`
- `nodemailer`

See more `dev-dependencies` in the [`package.json`](package.json) file.

## Contributors
@ Team Lightning, September 2023
[Move back up](#free-lunch-app)