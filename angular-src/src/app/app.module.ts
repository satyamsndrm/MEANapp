import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
import { HttpModule } from '@angular/http';

import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { AwsapiComponent } from './components/awsapi/awsapi.component';
import { PollyComponent } from './components/polly/polly.component';
import { TranslateComponent } from './components/translate/translate.component';
import { ComprehendComponent } from './components/comprehend/comprehend.component';
import { HomeComponent } from './components/home/home.component';

import {AuthService} from './services/auth.service';

const appRoutes : Routes = [
	{path:'' , component : HomeComponent },
	{path:'login' , component : LoginComponent },
	{path:'polly' , component : PollyComponent },
	{path:'comprehend' , component : ComprehendComponent },
	{path:'translate' , component : TranslateComponent }

];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    AwsapiComponent,
    PollyComponent,
    TranslateComponent,
    ComprehendComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
