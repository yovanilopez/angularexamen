import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CursosService,Modelo } from 'src/app/curso/Services/cursos.service';



@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  Modelo: Modelo= {
    
    nombre: '',
    descripcion: '',
   
  }

  constructor( private CursosService : CursosService, private router:Router) { }

  ngOnInit(): void {
  }
  agregar(){
  
    
    this.CursosService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listacurso']);
   }

}
