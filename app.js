const express = require('express')
const cors = require('cors') 

const routes = require('./routes/files')
const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

app.use('/api/files', routes)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
