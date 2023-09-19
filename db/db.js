const Seqeulize = require("seqeulize")
require('dotenv').config()
const URI = process.env.MYSQL_ADDON_URI


const seqeulize = new Seqeulize(URI, { dialect: 'mysql' })

module.exports = seqeulize