import { Component, OnInit } from '@angular/core';
import { LoginServices } from './login/login.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  titulo = 'Listado de Personas';

  constructor(private loginService: LoginServices) {}

  ngOnInit(): void {
    
  }

  isAutenticado() {
    return this.loginService.isAutenticado();
  }
  
  salir() {
    this.loginService.logout();
  }
}
