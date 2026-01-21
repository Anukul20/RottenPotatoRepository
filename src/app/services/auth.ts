import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  constructor(private router:Router){

  }
  login(username:any,password:any){
    if(username=='anushree' && password=='dandekar'){
      return 200;
    }
    else
      return 400;
  }
  logout(){
    this.router.navigate(['login'])
  }
}
