import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EstudianteService, Modelo } from './../../Services/estudiante.service';

@Component({
  selector: 'app-listaestu',
  templateUrl: './listaestu.component.html',
  styleUrls: ['./listaestu.component.css']
})
export class ListaestuComponent implements OnInit {
  
  ListarModelos!: Modelo[];
  constructor(  private  EstudianteService: EstudianteService, private router:Router) { }

  ngOnInit(): void {
    this.listarmodelos();
  }

  listarmodelos(){
    this.EstudianteService.getModelos().subscribe(
      res=>{
        console.log(res)
        this.ListarModelos=<any>res;
      },
      err=> console.log(err)
    );
  }

  eliminar(id:string){
    this.EstudianteService.eliminarmodelo(id).subscribe(
      res=>{
        console.log('Eliminado');
        this.ListarModelos;
        


      },
      err=> console.log(err));
  }

  modificar(id:string){
    this.router.navigate(['/modificarestudiante/'+id])
  }




  Onnuevo(){
    this.router.navigate(["agregarestudiante"])
    }
  



  
}



