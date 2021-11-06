import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DoceService,Modelo} from './../../Services/doce.service';


@Component({
  selector: 'app-listadocente',
  templateUrl: './listadocente.component.html',
  styleUrls: ['./listadocente.component.css']
})
export class ListadocenteComponent implements OnInit {
   
  ListarModelos!: Modelo[];

  constructor( private DoceService:DoceService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }
  listarmodelos(){
    this.DoceService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminar(id:string){
    this.DoceService.eliminarmodelo(id).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/listadocente']);


      },
      err=> console.log(err));
  }

  modificar(id:string){
    this.router.navigate(['/modificardocente/'+id])
  }




  Onnuevo(){
    this.router.navigate(["agregardocente"])
    }
  



  
}



