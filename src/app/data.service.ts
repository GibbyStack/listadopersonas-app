import { Persona } from './persona.model';
import { LoginServices } from './login/login.service';
import { HttpClient } from'@angular/common/http';
import { Injectable } from'@angular/core';

@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient, private loginService: LoginServices){}

    obtenerPersonas() {
        const token = this.loginService.getIdToken();
        return this.httpClient.get('https://listado-personas-101b4-default-rtdb.firebaseio.com/datos.json?auth=' + token);
    }

    guardarPersonas(personas: Persona[]) {
        const token = this.loginService.getIdToken();
        this.httpClient.put('https://listado-personas-101b4-default-rtdb.firebaseio.com/datos.json?=auth=' + token, personas)
        .subscribe(
            response => {
                console.log('Resultado de ingresar las personas: ' + response);
            },
            error => {
                console.log('Error al guardar las personas' +  error);
            }
        );
    }

    modificarPersona(index: number, persona: Persona) {
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-101b4-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.put(url, persona)
        .subscribe(
            response => {
                console.log('Resultado de modificar la persona: ' + response);
            },
            error => {
                console.log('Error al modificar la persona' + error);
            }            
        )
    }

    eliminarPersona(index: number) {
        const token = this.loginService.getIdToken();
        let url: string;
        url = 'https://listado-personas-101b4-default-rtdb.firebaseio.com/datos/' + index + '.json?auth=' + token;
        this.httpClient.delete(url)
        .subscribe(
            response => {
                console.log('Resultado de eliminar una persona: ' + response);
            },
            error => {
                console.log('Error al eliminar la persona' + error);
            }            
        )
    }
}