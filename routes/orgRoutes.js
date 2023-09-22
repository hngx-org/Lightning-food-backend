const express = require('express');
const { auth, adminUser } = require('../middlewares/auth');

const router = express.Router();
const {
  createOrganization,
  sendInviteCode,
  confirmInviteCode,
  updateOrgDetails,
} = require('../controllers/organizationController');


// admin user middleware to block non admin from accessing the follow routes
// router.use(auth);
// router.use(adminUser);

router.post('/create', createOrganization);
router.post('/send-invite', sendInviteCode);
router.post('/confirm-invite', confirmInviteCode);
router.put('/update-info', updateOrgDetails);

module.exports = router;
