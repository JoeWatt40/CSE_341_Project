<<<<<<< HEAD
//ta05 routes
const express = require('express');
const router = express.Router();

const ta05Controller = require('../controllers/ta05');

router.post('/create-cookie', ta05Controller.postCreateCookie);

router.post('/change-style', ta05Controller.postStyle);

router.post('/counter', ta05Controller.postCounter);

router.post('/reset', ta05Controller.resetSession);

router.get('/', ta05Controller.getIndex);

module.exports = router;
=======
//ta05 routes
const express = require('express');
const router = express.Router();

const ta05Controller = require('../controllers/ta05');

router.post('/create-cookie', ta05Controller.postCreateCookie);

router.post('/change-style', ta05Controller.postStyle);

router.post('/counter', ta05Controller.postCounter);

router.post('/reset', ta05Controller.resetSession);

router.get('/', ta05Controller.getIndex);

module.exports = router;
>>>>>>> a30023c10ff18b0cffbd52318fe62393979d3806
