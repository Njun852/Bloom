const {writeFile, readFile} = require('fs').promises
function addTask(req, res){
    const path = './model/tasks.json'
    readFile(path, 'utf-8')
    .then(tasks => {
        writeFile(path, JSON.stringify([...JSON.parse(tasks), req.body], null, 2))
        res.status(200).send('Great!')
    })
}
module.exports = addTask