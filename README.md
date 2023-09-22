# lightning-food

## Free Lunch App

### Functionalities

Design Pattern
REST API
Model, Controller

### Technologies and Framework

- Database - MySQL
- Dependencies - express.js, Node.js, sequelize, es-lint, prettier, dotenv, JWT
- Authentication: password
- Model: Link to model
- Repo Link

### System Components

- Authentication and Authorization
- Models: users, organization
- Middleware: authentication
- Controllers: userLoginController, userRegisterationController, userLogoutController, changePasswordController,
  emailConfirmationController, codeConfirmationController

### API Endpoints:

- POST /api/auth/login - Login a user { staff or Organisation }
- POST /api/auth/signup/org-user - Register admin user and organisation
- POST /api/auth/signup - Register user
- POST /api/auth/logout - Logout a user
- PATCH /api/user - Forgot password
- POST /api/emailConfirmation - sends code to email
- POST /api/codeConfirmation - verifies authenticity of the code

### User Management

- Models: organisation_invites, organisation_lunch_wallet
- Middleware: is_admin, authentication
- Controllers: updateUserController, getOneUserController, getAllUserController, sendUserInviteController

### API Endpoints:

- GET /api/users/me - Get current user/staff details
- GET /api/users/:id - Get a user/staff details using ID
- GET /api/users - List of all users
- PATCH /api/users/:id - Update user details
- DELETE /api/users/:id - Delete user - ADMIN
- POST /api/invite - send user to invite – ADMIN

### Lunch Management

- Models: withdrawals, lunches
- Middleware: authentication
- Controllers: getAllLunchController, getAllNotificationController, getLunchByIDController, giftLunchController, redeemGiftController

### API Endpoints:

- GET /notification - Get all notifications
- GET /lunch/:userId - Get lunch details using user ID
- GET /lunch/:lunchId - Get lunch details using ID
- GET /lunch - Get all lunch history
- POST /send - Give lunch to a user
- POST /redeem - Redeem a lunch

## API Testing

## Video Volunteer

### ToDo Actions

- Create a Database: ExtranoDev, Aanuoluwapo Liasu
- Create a Folder structure: Precious Chukwuezi
- Create API documentation:
- Functionality
- Api Request Information
- Request and Response format
- API Testing teams: creating postman file
