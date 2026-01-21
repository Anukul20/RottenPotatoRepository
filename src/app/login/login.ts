import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Auth } from '../services/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {
  constructor(private auth:Auth,private router:Router){

  }
username=""
password=""
errorMsg=""
login(){
if(this.username.trim().length===0){
this.errorMsg="Username is null"
}
else if(this.password.trim().length===0){
this.errorMsg="Password is null"
}
else {
  
let res=this.auth.login(this.username,this.password);
if(res==200){
  this.router.navigate(['home'])
}else if(res==400){
  this.errorMsg="invalid creds"
}
}
}
}
