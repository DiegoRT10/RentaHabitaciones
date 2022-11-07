import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudRentaService, Rentas } from 'src/app/services/crud-renta.service';


@Component({
  selector: 'app-crear-renta',
  templateUrl: './crear-renta.component.html',
  styleUrls: ['./crear-renta.component.css']
})
export class CrearRentaComponent implements OnInit {

  AggRentas: Rentas ={
    id:'',
    estudiante:'',
    recepcionista:'',
    tipoRenta:'',
    }
  constructor(private crudRentasService:CrudRentaService, private router:Router) { }

  ngOnInit(): void {
  }

  AgregarRentas():void{

    this.router.navigate(['renta']);

    this.crudRentasService.addRenta(this.AggRentas).subscribe(
      res => {
        console.log('Se agrego la renta');
        this.router.navigate(['renta']);
      },
      err => {
        console.log(err);
      });
  }
}