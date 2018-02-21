app.get('/', function (req, res) {
  res.send('index')
})

app.get('/portfolio', function (req, res) {
  res.send('about')
})

app.get('/about', function (req, res) {
  res.send('about')
})

app.get('/blog', function (req, res) {
  res.send('about')
})

