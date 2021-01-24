const express = require('express');
const router = express.Router();

//@rout   GET api/post
///@desc  Test route
//@access Public

router.get('/', (req, res) => res.send('post route'));

module.exports = router;