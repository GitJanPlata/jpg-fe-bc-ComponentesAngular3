import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-articulos',
  templateUrl: './tabla-articulos.component.html',
  styleUrls: ['./tabla-articulos.component.css']
})
export class TablaArticulosComponent {
  @Input() articulos: any[] = [];
  @Output() borrarArticulo = new EventEmitter<number>();
  @Output() seleccionarArticulo = new EventEmitter<number>();

  borrar(index: number) {
    this.borrarArticulo.emit(index);
  }

  seleccionar(index: number) {
    this.seleccionarArticulo.emit(index);
  }
}