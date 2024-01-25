const {writeFile} = require('fs').promises

function finishTask(req, res) {
    writeFile('./model/tasks.json',
    JSON.stringify([...req.body], null, 2))
    res.status(200).send('OK')
}

module.exports = finishTask