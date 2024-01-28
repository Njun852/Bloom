const {readFileSync} = require('fs')

const labels = JSON.parse(readFileSync('./model/labels.json', 'utf-8'))

function getLabels(req, res){
    res.status(200).json({success: true, data:[...labels]})
}

module.exports = getLabels