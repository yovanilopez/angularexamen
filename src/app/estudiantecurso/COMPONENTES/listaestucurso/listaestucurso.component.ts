import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudicursoService, Modelo } from './../../Services/estudicurso.service';


@Component({
  selector: 'app-listaestucurso',
  templateUrl: './listaestucurso.component.html',
  styleUrls: ['./listaestucurso.component.css']
})
export class ListaestucursoComponent implements OnInit {
   
  ListarModelos!: Modelo[];
  constructor( private EstudicursoService:EstudicursoService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }

  listarmodelos(){
    this.EstudicursoService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminar(id:string){
    this.EstudicursoService.eliminarmodelo(id).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/listapersona']);


      },
      err=> console.log(err));
  }

  modificar(id:string){
    this.router.navigate(['/modificarestudiantecurso/'+id])
  }




  Onnuevo(){
    this.router.navigate(["agregarestudiantecurso"])
    }
  



  
}




