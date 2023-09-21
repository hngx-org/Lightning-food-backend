const express = require('express');

const router = express.Router();
const {
  createOrganization,
  sendInvite,
  updateOrgDetails,
} = require('../controllers/organizationController');

router.post('/create', createOrganization);
router.post('send-invite', sendInvite);
router.put('/update-info', updateOrgDetails);

module.exports = router;
