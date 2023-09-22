const express = require('express');
const { auth, adminUser } = require('../middlewares/auth');

const router = express.Router();
const {
  createOrganization,
  sendInvite,
  updateOrgDetails,
} = require('../controllers/organizationController');

router.post('/create', createOrganization);

// admin user middleware to block non admin from accessing the follow routes
router.use(auth);
router.use(adminUser);
router.post('send-invite', sendInvite);
router.put('/update-info', updateOrgDetails);

module.exports = router;
