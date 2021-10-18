<<<<<<< HEAD
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User'});
});

app.get('/users', (req, res, next) => {
    res.render('users', {
      pageTitle: 'User',
      users: users,
      hasUsers: users.length > 0
    });
  });

app.post('/addUser', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});

=======
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const users = [];

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res, next) => {
    res.render('index', { pageTitle: 'Add User'});
});

app.get('/users', (req, res, next) => {
    res.render('users', {
      pageTitle: 'User',
      users: users,
      hasUsers: users.length > 0
    });
  });

app.post('/addUser', (req, res, next) => {
    users.push({ name: req.body.username });
    res.redirect('/users');
});

>>>>>>> a30023c10ff18b0cffbd52318fe62393979d3806
app.listen(3000);