import { Component, OnInit } from '@angular/core';
import { CrudReservaService,Reservas} from './../../services/crud-reserva.service';
import { Route, Router } from '@angular/router';


@Component({
  selector: 'app-reserva',
  templateUrl: './reserva.component.html',
  styleUrls: ['./reserva.component.css']
})
export class ReservaComponent implements OnInit {

  ListaReservas?: Reservas[];

  DelReserva: Reservas ={
    id:'',
    nombre:'',
    descripcion:''
  
    }

  constructor(private crudReservaService:CrudReservaService, private router:Router) { }

  ngOnInit(): void {
    this.listarReservas();
  }

  listarReservas(){
    this.crudReservaService.getReserva().subscribe(
      res=>{
        this.ListaReservas=<any>res;     
        console.log(this.ListaReservas);
        

      },
      err =>{
        console.log(err);
      }
    );
  
  }

  crear(): void{
    //localStorage.setItem('dep',<string>rese);
    this.router.navigate(['crear-reserva']);
  }

  Editar(id:String):void{
      localStorage.setItem('idP',<string>id);
      this.router.navigate(['update-reserva']); 
  }

  Eliminar(id:any):void{
    console.log('este es el id desde HTML '+id);
    this.DelReserva.id=id;
    console.log('este es el id desde delReserva '+id);
    this.crudReservaService.delReserva(id).subscribe(
      res => {
        console.log('Se elimino el puesto');
        this.router.navigate(['reserva']);
      },
      err => {
        console.log(err);
      });
  }
}
