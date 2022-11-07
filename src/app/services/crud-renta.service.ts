import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrudRentaService {

  constructor(private http: HttpClient,
    private jwtHelper: JwtHelperService) { }
    private URL = 'http://localhost:3000';

//Listar todas las rentas   
getRenta(){
  return this.http.get(`${this.URL}/renta/`);
} 

//Obtener una renta
getOneRenta(renta:any){
  return this.http.post<Rentas[]>(`${this.URL}/renta/onerenta`,renta);
}

//Agregar una reserva
addRenta(renta:any){
  return this.http.post(`${this.URL}/renta/create`,renta);
}

//Editar una reserva
editRenta(renta:any){
  return this.http.put(`${this.URL}/renta/update`,renta);
}

delRenta(id:any){
  console.log('este es el id desde el service '+id);
  return this.http.delete(`${this.URL}/renta/delete${id}`);
}
}
export interface Rentas{
 
id:String,
estudiante?:String,
recepcionista?:String,
tipoRenta?:String,
}
