const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex');
<<<<<<< HEAD

module.exports = secretKey;
=======
console.log('Generated Secret Key:', secretKey);
>>>>>>> b59bf14d1484960a5682d0aed161ce403250e330
