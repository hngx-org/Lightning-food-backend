# lightning-food

## Free Lunch App

### Functionalities
Design Pattern
REST API
Model, Controller


### Technologies and Framework
* Database - MySQL
* Dependencies - express.js, Node.js, sequelize, es-lint, prettier, dotenv, JWT
* Authentication: password
* Model: Link to model
* Repo Link


### System Components
Authentication and Authorization
Models: users, organization
Middleware: authentication
Controllers: userLoginController, userRegisterationController, userLogoutController, forgotPasswordController, changePasswordController, 
emailConfirmationController, codeConfirmationController

### API Endpoints:
POST /api/user - Login a user { staff or Organisation }
POST /api/user_reg - Register user 
POST /api/user - Logout a user
PATCH /api/user - Forgot password
POST /api/emailConfirmation - sends code to email
POST /api/codeConfirmation - verifies authenticity of the code

### User Management
Models: organisation_invites, organisation_lunch_wallet
Middleware: isAdmin, authentication
Controllers: updateUserController, getOneUserController, getAllUserController, sendUserInviteController

### API Endpoints:
PATCH /api/user/user_id - Update user details
GET /user - Get a user/staff details using ID
GET /users - List of all users
POST /api/invite - send user to invite – ADMIN

### Lunch Management
Models: withdrawals, lunches
Middleware: authentication
Controllers: getAllLunchController, getAllNotificationController, getLunchByIDController, giftLunchController, redeemGiftController

### API Endpoints:
GET /notification - Get all notifications
GET /lunch - Get lunch details using user ID
GET /lunch - Get all lunch history
POST /user/{id}/gift - Give lunch to a user
POST /redeem - Redeem a lunch

## API Testing
## Video Volunteer


### ToDo Actions
Create a Database: ExtranoDev, Aanuoluwapo Liasu
Create a Folder structure: Precious Chukwuezi
Create API documentation:
Functionality
Api Request Information
Request and Response format
API Testing teams: creating postman file

MYSQL_ADDON_HOST=bfjkcttl9owdewhqjpjf-mysql.services.clever-cloud.com
MYSQL_ADDON_DB=bfjkcttl9owdewhqjpjf
MYSQL_ADDON_USER=uzq1wq0wnpsg6cvu
MYSQL_ADDON_PORT=3306
MYSQL_ADDON_PASSWORD=2PcRLWSJAxvJhbWX2ZNr
MYSQL_ADDON_URI=mysql://uzq1wq0wnpsg6cvu:2PcRLWSJAxvJhbWX2ZNr@bfjkcttl9owdewhqjpjf-mysql.services.clever-cloud.com:3306/bfjkcttl9owdewhqjpjf
