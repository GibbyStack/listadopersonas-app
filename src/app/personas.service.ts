import { Persona } from './persona.model';
import { LogginService } from './loginService.service';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable()
export class PersonasService {

    constructor(private logginService: LogginService) {}

    personas: Persona[] = [
        new Persona('Carlos', 'Orozco'),
        new Persona('Sarahi', 'Rivas')
    ];
    saludar = new EventEmitter<number>();

    agregarPersona(persona: Persona) {
        this.logginService.enviarMensajeConsola('Se agrego a: ' + persona.nombre);
        this.personas.push(persona);
    }

    editarPersona(i: number, persona: Persona,) {
        this.logginService.enviarMensajeConsola('Se edito a: ' + persona.nombre);
        this.personas[i] = persona;
    }

    eliminarPersona(i: number) {
        this.personas.splice(i, 1);
    }

    buscarPersona(index: number): Persona {
        let persona: Persona = this.personas[index];
        return persona;
    }
}