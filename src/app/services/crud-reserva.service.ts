import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudReservaService {

  constructor(private http: HttpClient,
    private jwtHelper: JwtHelperService) { }
    private URL = 'http://localhost:3000';

//Listar todas las reservas   
getReserva(){
  return this.http.get(`${this.URL}/reserva/`);
} 

//Obtener una reserva
getOneReserva(reserva:any){
  return this.http.post<Reservas[]>(`${this.URL}/reserva/onereserva`,reserva);
}

//Agregar una reserva
addReserva(reserva:any){
  return this.http.post(`${this.URL}/reserva/create`,reserva);
}

//Editar una reserva
editReserva(reserva:any){
  return this.http.put(`${this.URL}/reserva/update`,reserva);
}

delReserva(id:any){
  console.log('este es el id desde el service '+id);
  return this.http.delete(`${this.URL}/reserva/delete${id}`);
}
}
export interface Reservas{
 
id:String,
nombre?:String,
descripcion?:String,
}
