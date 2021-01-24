const express = require('express');
const router = express.Router();
const auth1 = require('../../middleware/auth');
const User = require('../../models/users');

//@rout   GET api/auth
///@desc  Test route
//@access Public

router.get('/', auth1, async(req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;