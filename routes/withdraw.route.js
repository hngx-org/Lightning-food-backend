const express = require('express');
const {
  withdrawCashController,
  withdrawalHistory,
} = require('../controllers/withdraw.controller');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.use(auth);
router.post('/request', withdrawCashController);
// router.get('/', withdrawCashController);
router.get('/all', withdrawalHistory);

module.exports = router;
