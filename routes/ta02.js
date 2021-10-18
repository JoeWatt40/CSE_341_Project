//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = ['Joe', 'Grant'];

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
    
  });
});

router.post('/addUser', (req, res, next) => {
  const newUser = req.body.newUser;
});

router.post('/removeUser', (req, res, next) => {
  const removeUser = req.body.removeUser;
});

module.exports = router;
