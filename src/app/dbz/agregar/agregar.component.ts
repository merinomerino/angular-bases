import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

 @Input() personajes:Personaje[] = [];
 @Input() nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 100
  }

  agregar() {
    console.log(this.nuevo)
    this.personajes.push(this.nuevo);
    this.nuevo={
      nombre:'',
      poder:0
    }
  }

}
