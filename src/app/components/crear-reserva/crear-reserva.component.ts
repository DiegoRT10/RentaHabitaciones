import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudReservaService, Reservas } from 'src/app/services/crud-reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {

  AggReserva: Reservas ={
    id:'',
    nombre:'',
    descripcion:''
    }
  constructor(private crudReservaService:CrudReservaService, private router:Router) { }

  ngOnInit(): void {
  }

  AgregarReserva():void{

    this.router.navigate(['reserva']);

    this.crudReservaService.addReserva(this.AggReserva).subscribe(
      res => {
        console.log('Se agrego la reserva');
        this.router.navigate(['reserva']);
      },
      err => {
        console.log(err);
      });
  }
}
