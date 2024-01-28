const express = require('express')
const getLabels = require('../controller/getLabels')
const addLabel = require('../controller/addLabel')

const router = express.Router()
router.route('/').get(getLabels).post(addLabel)
module.exports = router