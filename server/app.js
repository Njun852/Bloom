const express = require('express')
const taskRouter = require('./router/tasks')
const cors = require('cors')
const app = express()
app.use(cors())
app.use('/tasks', taskRouter)

app.listen(5000, () => console.log('server listening on port 5000...'))