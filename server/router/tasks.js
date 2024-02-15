const express = require('express')
const getTasks = require('../controller/getTasks')
const addTask = require('../controller/addTask')
const updateTask = require('../controller/updateTask')

const router = express.Router()
router.route('/').get(getTasks)
.put(updateTask).post(addTask)
module.exports = router