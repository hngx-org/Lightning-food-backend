const express = require('express');
const {
  withdrawCashController,
  withdrawalHistory,
} = require('../controllers/withdraw.controller');
const { auth } = require('../middlewares/auth');

const router = express.Router();

router.use(auth);
router.post('/withdraw', withdrawCashController);
router.get('/', withdrawCashController);
router.get('/history', withdrawalHistory);

module.exports = router;
