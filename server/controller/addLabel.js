const {readFile, writeFile} = require('fs').promises

function addLabel(req, res){
    const path = './model/labels.json' 
    writeFile(path, JSON.stringify([...req.body], null, 2))
    res.status(200).send('OK')
}

module.exports = addLabel