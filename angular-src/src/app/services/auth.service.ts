import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http) { }

  synthesizeSpeech(param){
  	console.log('Param in AuthService');
  	console.log(param);
  	let headers = new Headers();
  	headers.append('Content-Type', 'application/json');
  	return this.http.post('http://localhost:3000/aws/polly/synthesize' , param , {headers:headers}).pipe(map(res =>res.json()));
  }

  getVoices(){
  	let headers = new Headers():
  	headers.append('Content-Type', 'application/json');
  	return this.http.get('http://localhost:3000/aws/polly/voices', {headers:headers}).pipe(map(res =>res.json()));
  }

}
