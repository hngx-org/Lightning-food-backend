const express = require('express');

const router = express.Router();
const {
  createOrganization,
  sendInvite,
} = require('../controllers/organizationController');

router.post('/create', createOrganization);
router.post('send-invite', sendInvite);

module.exports = router;
