import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable()
export class LoginServices {

    token: string;
    constructor(private fireAuth: AngularFireAuth, private router: Router) {}

    login(email: string, password: string) {
        this.fireAuth.signInWithEmailAndPassword(email, password)
        .then(
          response => {
            this.fireAuth.currentUser.then(
              user => {
                user.getIdToken().then(
                  token => {
                    this.token = token;
                    this.router.navigate(['/']);
                  }
                )
              }
            )
          }
        )
    }

    getIdToken() {
        return this.token;
    }

    isAutenticado() {
      return this.token != null;
    }

    logout() {
      this.fireAuth.signOut().then( 
        () => {
          this.token = null;
          this.router.navigate(['login']);
        }
      ).catch(
        error => {
          console.log('Error de logout ' + error);
        }
      )
    }
}