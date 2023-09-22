const express = require('express');

const router = express.Router();
const {
  createOrganization,
  sendInviteCode,
  confirmInviteCode,
  updateOrgDetails,
} = require('../controllers/organizationController');

router.post('/create', createOrganization);
router.post('/send-invite', sendInviteCode);
router.post('/confirm-invite', confirmInviteCode);
router.put('/update-info', updateOrgDetails);

module.exports = router;
