const {readFileSync} = require('fs')

const tasks = JSON.parse(readFileSync('./model/tasks.json', 'utf-8'))
function getTasks(req, res){
    res.status(200).json({success: true, data:[...tasks]})
}


module.exports = getTasks