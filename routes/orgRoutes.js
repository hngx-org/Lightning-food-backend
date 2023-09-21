const express = require('express');

const router = express.Router();
const {
  sendInvitation,
  createOrganization,
} = require('../controllers/organizationController');

router.post('/create', createOrganization);
router.post('/invite', sendInvitation);

module.exports = router;
