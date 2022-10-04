
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent  {

 
 @Input() nuevo: Personaje = {
    nombre: 'Maestro Roshi',
    poder: 100
  }
  @Output() onNuevoPersonaje:EventEmitter<Personaje>= new EventEmitter<Personaje>();

  agregar() {
    console.log(this.nuevo)
   
    this.onNuevoPersonaje.emit(this.nuevo);

    this.nuevo={
      nombre:'',
      poder:0
    }

    
  }

}
