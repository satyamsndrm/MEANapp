const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const AWS= require("aws-sdk");
const fs = require('fs');

AWS.config.loadFromPath('./config/config.json');
const polly = new AWS.Polly();

router.get('/polly/voices', (req  , res, next) =>{

	const para ={
		LanguageCode:'en-IN'
	};

	polly.describeVoices(para, (err , data) => {
		if(err){
			res.json({success:false , msg:err});
		}
		console.log(data);
		res.json({success:true , datas:data});
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
			console.log(err);
		}
		console.log(data);
		fs.writeFile('./angular-src/src/audiosrc.mp3', data.AudioStream, (err) =>{
			if(err){
				console.log(err);
			}else{
				res.json({success:true , src:'audiosrc.mp3'});
			}
		})
	});

});


router.get('/comprehend', (req  , res, next) =>{
	
	var comprehend = new AWS.Comprehend();
	
	const params ={
	   "LanguageCode": "en",
	   "Text": "Amazon fb Jeff Bezos Mark Zuckerburg"
	};
	comprehend.detectEntities(params , (err , data) =>{
		if(err){
			res.json({success:false , err:err});
		}
		res.json({success:true , data:data});
	});
});


router.get('/translate', (req  , res) =>{
	
	const translate = new AWS.Translate();
	
	const p1 = {
		"SourceLanguageCode":"en",
		"TargetLanguageCode":"fr",
		"Text":"Hello I am Satyam sundaram"
	};

	translate.translateText(p1 , (err , data) =>{
		if(err){
			res.json({success:false , err:err});
		}
		res.json({success:true , data:data});
	});

});

module.exports = router;