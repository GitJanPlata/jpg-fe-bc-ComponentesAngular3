import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articulos: any[] = [];
  articuloSeleccionado: number | undefined = undefined;

  codigo: string = '';
  descripcion: string = '';
  precio: number = 0;
  
  agregarArticulo(articulo: any) {
    this.articulos.push(articulo);
  }

    modificarArticulo(articulo: any) {
      if (this.articuloSeleccionado !== undefined) {
        this.articulos[this.articuloSeleccionado] = articulo;
        this.articuloSeleccionado = undefined;
      }
    }

  borrarArticulo(index: number) {
    this.articulos.splice(index, 1);
  }

  seleccionarArticulo(index: number) {
    this.articuloSeleccionado = index;
    const articulo = this.articulos[index];
    this.codigo = articulo.codigo; // Actualiza el campo 'codigo' del formulario
    this.descripcion = articulo.descripcion; // Actualiza el campo 'descripcion' del formulario
    this.precio = articulo.precio; // Actualiza el campo 'precio' del formulario
  }
}