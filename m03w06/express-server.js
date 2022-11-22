// ----------- REQUIREMENTS
const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// ----------- MIDDLEWARES
app.use((req, res, next) => {
  console.log(`URL: ${req.url} METHOD: ${req.method}`);
  next();
});

// ----------- ROUTES
app.get('/', (req, res) => {
  const templateVars = {
    message: 'hello there',
    username: 'Alice Bob Carol',
    age: 25
  };

  res.render('index', templateVars);
});

app.get('/lighthouselabs', (req, res) => {
  res.status(200).send('Hello from /lighthouselabs route! 👋');
});

app.get('/google', (req, res) => {
  res.status(302).redirect('https://google.com');
});

app.get('/welcome', (req, res) => {
  console.log(req.query);

  const { username } = req.query;
  if (!username) {
    return res.status(400).send('username query not provided!');
  }

  res.status(200).send(`Welcome user ${username}`);
});

// ----------- LISTENER
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
