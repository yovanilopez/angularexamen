import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursodoService, Modelo } from './../../Services/cursodo.service';

@Component({
  selector: 'app-inicursodo',
  templateUrl: './inicursodo.component.html',
  styleUrls: ['./inicursodo.component.css']
})
export class InicursodoComponent implements OnInit {
  
  ListarModelos!: Modelo[];
  constructor(  private CursodoService:CursodoService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }
  listarmodelos(){
    this.CursodoService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminar(id:string){
    this.CursodoService.eliminarmodelo(id).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/listapersona']);


      },
      err=> console.log(err));
  }
  modificar(id:string){
    this.router.navigate(['/modificarcursodo/'+id])
  }




  Onnuevo(){
    this.router.navigate(["agregarcursodo"])
    }

}
