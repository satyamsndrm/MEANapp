import { Injectable } from '@angular/core';
import { Http , Headers } from '@angular/http';
import 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:Http) { }

  synthesizeSpeech(param){
  	let headers = new Headers();
  	headers.append('Content-Type' , 'application/json');
  	return this.http.post('http://localhost:3000/users/polly/synthesize' , param , {headers:headers}).map(res =>res.json());
  }

}
