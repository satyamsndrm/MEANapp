import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-polly',
  templateUrl: './polly.component.html',
  styleUrls: ['./polly.component.css']
})
export class PollyComponent implements OnInit {
	textVoice : String;
	VoiceId : String;
	mp3Source : String;
	voicelist : Array;
	param: Object;

	constructor(private authService : AuthService) {
		this.voicelist=[{
			Id: 'Raveena',
			LanguageName:'Eng',
			Name:'sdf'
		}]
		this.mp3Source = "audiosrc.mp3";
	 }

	ngOnInit() {
	/*
		this.authService.getVoices().subscribe(d => {
			console.log(d.datas.Voices);
			this.voicelist=d.datas.Voices;
			console.log(this.voicelist);

		});
	*/
	}
	synthesizeMySpeech(){

		this.param ={
			text: this.textVoice,
			voiceid: this.VoiceId
		};
		if(this.textVoice && this.VoiceId){
			this.authService.synthesizeSpeech(this.param).subscribe(data => { 
				console.log(data);
				this.mp3Source = data.src;
			});
		}
		return false;
	}

}
