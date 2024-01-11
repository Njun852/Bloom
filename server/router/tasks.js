const express = require('express')
const getTasks = require('../controller/getTasks')
const addTask = require('../controller/addTask')

const router = express.Router()
router.route('/').get(getTasks).post(addTask)
module.exports = router