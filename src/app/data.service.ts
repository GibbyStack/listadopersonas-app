import { Persona } from './persona.model';
import { HttpClient } from'@angular/common/http';
import { Injectable } from'@angular/core';

@Injectable()
export class DataService{
    constructor(private httpClient: HttpClient){}

    obtenerPersonas() {
        return this.httpClient.get('https://listado-personas-101b4-default-rtdb.firebaseio.com/datos.json');
    }

    guardarPersonas(personas: Persona[]) {
        this.httpClient.put('https://listado-personas-101b4-default-rtdb.firebaseio.com/datos.json', personas)
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
        let url: string;
        url = 'https://listado-personas-101b4-default-rtdb.firebaseio.com/datos/' + index + '.json';
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
        let url: string;
        url = 'https://listado-personas-101b4-default-rtdb.firebaseio.com/datos/' + index + '.json';
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