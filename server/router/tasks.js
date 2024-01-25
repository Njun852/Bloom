const express = require('express')
const getTasks = require('../controller/getTasks')
const finishTask = require('../controller/finishTask')

const router = express.Router()
router.route('/').get(getTasks).put(finishTask)
module.exports = router