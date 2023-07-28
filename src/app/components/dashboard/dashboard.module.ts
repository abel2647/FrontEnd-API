import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
//import { UsuariosComponent } from './usuarios/usuarios.component';
import { InicioComponent } from './inicio/inicio.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from '../shared/shared.module';
import { ClientesComponent } from './clientes/clientes.component';
import { AutoresComponent } from './autores/autores.component';
import { LibrosComponent } from './libros/libros.component';
import { BarralateralComponent } from './barralateral/barralateral.component';
//import { ReportesComponent } from './reportes/reportes.component';


@NgModule({
  declarations: [
    DashboardComponent,
   // UsuariosComponent,
    InicioComponent,
    NavbarComponent,
    ClientesComponent,
    AutoresComponent,
    LibrosComponent,
    BarralateralComponent,
    //ReportesComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
