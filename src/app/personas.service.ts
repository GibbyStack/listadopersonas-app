import { Persona } from './persona.model';
import { LogginService } from './loginService.service';
import { EventEmitter, Injectable } from '@angular/core';
import { DataService } from './data.service';

@Injectable()
export class PersonasService {

    constructor(private logginService: LogginService, private dataService: DataService) {}

    personas: Persona[] = [];
    saludar = new EventEmitter<number>();

    setPersonas(personas: Persona[]) {
        this.personas = personas;
    }

    cargarPersonas() {
        return this.dataService.obtenerPersonas();
    }

    agregarPersona(persona: Persona) {
        this.logginService.enviarMensajeConsola('Se agrego a: ' + persona.nombre);
        if(this.personas == null) {
            this.personas = [];
        }
        this.personas.push(persona);
        this.dataService.guardarPersonas(this.personas);
    }

    editarPersona(i: number, persona: Persona,) {
        this.logginService.enviarMensajeConsola('Se edito a: ' + persona.nombre);
        this.personas[i] = persona;
        this.dataService.modificarPersona(i, persona);
    }

    eliminarPersona(i: number) {
        this.personas.splice(i, 1);
        this.dataService.eliminarPersona(i);
        this.modificarPersonas();
    }

    buscarPersona(index: number): Persona {
        let persona: Persona = this.personas[index];
        return persona;
    }

    modificarPersonas() {
        if (this.personas != null) {
            this.dataService.guardarPersonas(this.personas);
        }
    }
}