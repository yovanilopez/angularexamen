import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BoletoService, Modelo } from './../../Services/boleto.service';


@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  ListarModelos!: Modelo[];
  constructor( private BoletoService:BoletoService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }

  listarmodelos(){
    this.BoletoService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminar(id:string){
    this.BoletoService.eliminarmodelo(id).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/listapersona']);


      },
      err=> console.log(err));
  }

  modificar(id:string){
    this.router.navigate(['/modificarpersona/'+id])
  }




  Onnuevo(){
    this.router.navigate(["agregarpersona"])
    }
  



  
}



