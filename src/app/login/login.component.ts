import { Component, NgZone, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  token: string;

  constructor(private fireAuth: AngularFireAuth, private ngZone: NgZone, private router: Router) { }

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
    this.fireAuth.signInWithEmailAndPassword(email, password)
    .then(
      response => {
        this.fireAuth.currentUser.then(
          user => {
            user.getIdToken().then(
              token => {
                this.token = token;
              }
            )
          }
        )
      }
    )
  }
}
