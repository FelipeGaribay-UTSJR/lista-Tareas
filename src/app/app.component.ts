import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FormControl, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app-cuatro';

  //propiedades
  listaTareas: string [];
  tarea = new FormControl();

  constructor() {
    this.listaTareas = [];
    if (typeof localStorage !== 'undefined') {
      let datos = localStorage.getItem('tareas');
      if (datos != null) {
        let arreglo = JSON.parse(datos);
        if (arreglo != null) {
          for (let tarea of arreglo) {
            this.listaTareas.push(tarea);
          }
        }
      }
    }
  }
  

  agregarTarea(){
    this.listaTareas.push(this.tarea.value);
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
    this.tarea.setValue('');
  }

  borraTarea(posicion:number){
    this.listaTareas.splice(posicion,1);
    localStorage.clear();
    localStorage.setItem('tareas', JSON.stringify(this.listaTareas));
  }

  borrarTareas(){
    localStorage.clear();
    this.listaTareas = [];
  }
}
