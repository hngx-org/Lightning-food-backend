const express = require('express');

const router = express.Router();
const { createOrganization } = require('../controllers/organizationController');

router.post('/create', createOrganization);

module.exports = router;
