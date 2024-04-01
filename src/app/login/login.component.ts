import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router,RouterLink, RouterModule } from '@angular/router';
import { SignUpModel } from '../sign-in/sign-in.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,RouterModule,RouterLink,FormsModule],
  templateUrl: './login.component.html',
})
export default class LoginComponent {
  isSignDivVisible: boolean = true;
  loginObj: LoginModel = new LoginModel();
  constructor(private router: Router){}

  onLogin() {
    const localUsers = localStorage.getItem('angular');
    if(localUsers != null){
      const users = JSON.parse(localUsers);
      const isUserPresent = users.find((user:SignUpModel)=> user.email == this.loginObj.email && user.password == this.loginObj.password && this.loginObj.password != '' && this.loginObj.email != '');
      console.log(isUserPresent)
      if(isUserPresent != undefined){
        alert('Usuario correcto')
        localStorage.setItem('loggedUser',JSON.stringify(isUserPresent));
        this.router.navigateByUrl('/dashboard/quotes');
      }else{
        alert('El usuario ingresado no es correcto ..')
      }
    }
  }

  sendSignIn() {
    this.router.navigateByUrl('/sign-in');
  }
}

export class LoginModel {
  email:string;
  password:string;

  constructor() {
    this.email = '';
    this.password = '';
  }
}