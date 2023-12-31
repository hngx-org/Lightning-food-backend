const express = require('express');
const { auth, adminUser } = require('../middlewares/auth');

const router = express.Router();
const {
  //createOrganization,
  sendInviteCode,
  confirmInviteCode,
  updateOrgDetails,
} = require('../controllers/organizationController');

const { createOrgAndUser } = require('../controllers/authController');

// admin user middleware to block non admin from accessing the follow routes

router.post('/confirm-invite', confirmInviteCode);
router.post('/create', createOrgAndUser);

router.use(auth);
router.use(adminUser);
router.post('/send-invite', sendInviteCode);
router.put('/update-info', updateOrgDetails);

module.exports = router;
