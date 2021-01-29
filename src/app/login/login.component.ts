import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginServices } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;

  constructor(private loginService: LoginServices) { }

  ngOnInit(): void {
    // this.fireAuth.user.subscribe(
    //   user => {
    //     if(user) {
    //       this.ngZone.run(() => {
    //         this.router.navigate(['personas']);
    //       })
    //     }
    //   }
    // )
  }

  login(form: NgForm) {
    const email = form.value.email;
    const password = form.value.password;
    this.loginService.login(email, password);
  }


}
