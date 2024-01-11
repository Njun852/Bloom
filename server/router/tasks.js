const express = require('express')
const getTasks = require('../controller/getTasks')

const router = express.Router()
router.get('/', getTasks)
module.exports = router