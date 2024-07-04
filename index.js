const express = require('express')
const app = express()
const port = 3000

// GETリクエスト
app.get('/', (req, res) => {
  res.send({
    msg:'GET request'
  });
});

// POSTリクエスト
app.post('/', (req, res) => {
  res.send({
    msg:'POST request'
  });
});

// PUTリクエスト
app.put('/:id', (req, res) => {
  res.send({
    id: req.params.id,
    msg:'PUT request'
  });
});

app.get('/', (req, res) => {
  res.send('Hello New World! ようこそ新世界へ!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})