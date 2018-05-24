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
	datas : Object;

	constructor(private authService : AuthService) { }

	ngOnInit() {
	}
	synthesizeMySpeech(){
		let	params ={
			text: this.textVoice,
			id: this.VoiceId
		};
		if(this.textVoice && this.VoiceId){
			this.authService.synthesizeSpeech(params).subscribe(data => { data = this.datas=data		});
		}
		console.log(params);
		return false;
	}

}
