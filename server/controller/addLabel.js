const {readFile, writeFile} = require('fs').promises

function addLabel(req, res){
    const path = './model/labels.json' 
    readFile(path, 'utf-8')
    .then(labels => {
        writeFile(path, JSON.stringify([...JSON.parse(labels), req.body], null, 2))
        res.status(200).send('OK')
    })
}

module.exports = addLabel