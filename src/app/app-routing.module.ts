import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearRentaComponent } from './components/crear-renta/crear-renta.component';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { RentaComponent } from './components/renta/renta.component';
import { ReservaComponent } from './components/reserva/reserva.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},//puede acceder cualquier persona
  {path: 'reserva', component: ReservaComponent},//puede acceder cualquier persona
  {path: 'crear-reserva', component: CrearReservaComponent},//puede acceder cualquier persona
  {path: 'renta', component: RentaComponent},//puede acceder cualquier persona
  {path: 'crear-renta', component: CrearRentaComponent},//puede acceder cualquier persona
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
