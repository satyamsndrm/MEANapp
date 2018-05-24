

const AWS= require("aws-sdk");

AWS.config.loadFromPath('./config.json');

const polly = new AWS.Polly();


polly.describeVoices((err , data) => {
	if(err){
		console.log(err);
	}
//	console.log(data);

});

const param = {
	"OutputFormat":"mp3",
	"Text":"Hello Guys",
	"TextType":"text",
	"VoiceId":"Brian"
};

polly.synthesizeSpeech(param , (err , data) => {
	if(err){
		console.log(err);
	}

//	console.log(data);
});


var comprehend = new AWS.Comprehend();

const params ={
   "LanguageCode": "en",
   "Text": "Amazon fb Jeff Bezos Mark Zuckerburg"
};
comprehend.detectEntities(params , (err , data) =>{
	if(err){
	//	console.log(err);
	}

//	console.log(data);
});


const p1 = {
	"SourceLanguageCode":"en",
	"TargetLanguageCode":"fr",
	"Text":"Hello I am Satyam sundaram"
};

const translate = new AWS.Translate();

translate.translateText(p1 , (err , data) =>{
	if(err){
		console.log(err);
	}
	console.log(data);
});

