import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CursosService, Modelo } from './../../Services/cursos.service';


@Component({
  selector: 'app-cursolista',
  templateUrl: './cursolista.component.html',
  styleUrls: ['./cursolista.component.css']
})
export class CursolistaComponent implements OnInit {

  ListarModelos!: Modelo[];

  constructor(private CursosService:CursosService, private router:Router) { }

  ngOnInit(): void {

    this.listarmodelos();
  }

  listarmodelos(){
    this.CursosService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }
  eliminar(id:string){
    this.CursosService.eliminarmodelo(id).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        this.router.navigate(['/listacurso']);


      },
      err=> console.log(err));
  }

  modificar(id:string){
    this.router.navigate(['/modificarcurso/'+id])
  }




  Onnuevo(){
    this.router.navigate(["agregarcurso"])
    }
  



  
}



