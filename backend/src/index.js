import express from 'express'
const app = express()


console.log('es6 features works')
app.get('/', function (req, res) {
  res.send('hello world')
})

app.listen(3000, () => console.log('App listening on port 3000!'))
