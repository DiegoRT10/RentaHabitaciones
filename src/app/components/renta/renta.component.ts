import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudRentaService, Rentas } from 'src/app/services/crud-renta.service';

@Component({
  selector: 'app-renta',
  templateUrl: './renta.component.html',
  styleUrls: ['./renta.component.css']
})
export class RentaComponent implements OnInit {

  ListaRentas?: Rentas[];

  DelRentas: Rentas ={
    id:'',
    estudiante:'',
    recepcionista:'',
    tipoRenta:'',
  
    }

  constructor(private crudRentaService:CrudRentaService, private router:Router) { }

  ngOnInit(): void {
    this.listarRentas();
  }

  listarRentas(){
    this.crudRentaService.getRenta().subscribe(
      res=>{
        this.ListaRentas=<any>res;     
        console.log(this.ListaRentas);
        

      },
      err =>{
        console.log(err);
      }
    );
  
  }

  crear(): void{
    //localStorage.setItem('dep',<string>rese);
    this.router.navigate(['crear-renta']);
  }

  Editar(id:String):void{
      localStorage.setItem('idP',<string>id);
      this.router.navigate(['update-renta']); 
  }

  Eliminar(id:any):void{
    console.log('este es el id desde HTML '+id);
    this.DelRentas.id=id;
    console.log('este es el id desde delRenta '+id);
    this.crudRentaService.delRenta(id).subscribe(
      res => {
        console.log('Se elimino la renta');
        this.router.navigate(['reserva']);
      },
      err => {
        console.log(err);
      });
  }
}