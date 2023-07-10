import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-formulario-articulos',
  templateUrl: './formulario-articulos.component.html',
  styleUrls: ['./formulario-articulos.component.css']
})
export class FormularioArticulosComponent {
  codigo: number= 0;
  descripcion: string= '';
  precio: number= 0;

  @Output() agregarArticulo = new EventEmitter<any>();
  @Output() modificarArticulo = new EventEmitter<any>();

  agregar() {
    const articulo = {
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio
    };

    this.agregarArticulo.emit(articulo);
    this.resetFormulario();
  }

  modificar() {
    const articulo = {
      codigo: this.codigo,
      descripcion: this.descripcion,
      precio: this.precio
    };

    this.modificarArticulo.emit(articulo);
    this.resetFormulario();
  }

  resetFormulario() {
    this.codigo = 0;
    this.descripcion = '';
    this.precio = 0 ;
  }
}