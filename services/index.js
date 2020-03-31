const express = require('express')
const app = express()
const port = process.env.PORT || 8000

app.get('/all_users', (req, res) => {
  res.send('hello')
})

app.listen(port, () => {
  console.log(`Server runnig on port: ${port}`)
})