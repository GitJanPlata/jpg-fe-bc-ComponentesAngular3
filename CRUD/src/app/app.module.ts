import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormularioArticulosComponent } from './formulario-articulos/formulario-articulos.component';
import { TablaArticulosComponent } from './tabla-articulos/tabla-articulos.component';

@NgModule({
  declarations: [
    AppComponent,
    FormularioArticulosComponent,
    TablaArticulosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
