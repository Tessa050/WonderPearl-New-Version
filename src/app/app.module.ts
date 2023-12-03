import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    TratamientosComponent,
    BlogComponent,
    EquipoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule, RouterModule.forRoot([
      {path:'Inicio', component: InicioComponent},
      {path: 'Tratamientos', component: TratamientosComponent},
      {path: 'Equipo', component: EquipoComponent},
      {path: 'Blog', component: BlogComponent},
      {path: 'Contacto', component: ContactoComponent}

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Initialization for ES Users
import {
  Collapse,
  Input,
  Ripple,
  Dropdown,
  initTE,
} from "tw-elements";
import { InicioComponent } from './inicio/inicio.component';
import { TratamientosComponent } from './tratamientos/tratamientos.component';
import { BlogComponent } from './blog/blog.component';
import { EquipoComponent } from './equipo/equipo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { RouterModule } from '@angular/router';

initTE({Input, Ripple, Collapse, Dropdown });