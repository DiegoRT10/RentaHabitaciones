import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ReservaComponent } from './components/reserva/reserva.component';

//import { TokenInterceptorService } from './services/token-interceptor.service';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { CrearReservaComponent } from './components/crear-reserva/crear-reserva.component';
import { FormsModule } from '@angular/forms';
import { RentaComponent } from './components/renta/renta.component';
import { InquilinoComponent } from './components/inquilino/inquilino.component';
import { CrearRentaComponent } from './components/crear-renta/crear-renta.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ReservaComponent,
    CrearReservaComponent,
    RentaComponent,
    InquilinoComponent,
    CrearRentaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    //JWT
    {provide: JWT_OPTIONS, 
    useValue:  JWT_OPTIONS},
    JwtHelperService,
    //Token Interceptor
    //{provide: HTTP_INTERCEPTORS,useClass: TokenInterceptorService,multi:true},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
