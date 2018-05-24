const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const AWS= require("aws-sdk");

AWS.config.loadFromPath('./config/config.json');
const polly = new AWS.Polly();

router.get('/login', (req  , res, next) =>{
	res.send('');

});


router.get('/polly/voices', (req  , res, next) =>{

	polly.describeVoices((err , data) => {
		if(err){
			res.json({success:false , msg:err});
		}
		res.json({success:true , data:data});
	});

});

router.post('/polly/synthesize', (req  , res, next) =>{
	const param = {
		"OutputFormat":"mp3",
		"Text":req.body.text,
		"TextType":"text",
		"VoiceId":req.body.voiceid
	};

	polly.synthesizeSpeech(param , (err , data) => {
		if(err){
			res.json({success:false , err:err});
		}

		res.json({success:true , data:data});
	});

});


router.get('/comprehend', (req  , res, next) =>{
	res.send('');

});


router.get('translate', (req  , res) =>{
	res.send('');

});

router.post('/authenticate', (req  , res) =>{
	res.send('');

});

module.exports = router;