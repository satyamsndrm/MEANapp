const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/login', (req  , res, next) =>{
	res.send('');

});

router.get('/auth/github', passport.authenticate('github'));

router.get('/auth/github/callback', passport.authenticate('github', {failureRedirect: '/'}), (req, res) =>{
	res.redirect('/profile');

});

router.post('/profile', (req  , res) =>{
	res.send('');

});

module.exports = router;