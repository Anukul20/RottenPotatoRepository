import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../services/auth';

@Component({
  selector: 'app-headere',
  imports: [],
  templateUrl: './headere.html',
  styleUrl: './headere.scss',
})
export class Headere {
  constructor(private router:Router, private auth:Auth){

  }
goToHome(){
this.router.navigate(['home']);
}
logout(){
this.auth.logout();
}
}
