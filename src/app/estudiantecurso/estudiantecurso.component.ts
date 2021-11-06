import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EstudicursoService,Modelo } from 'src/app/estudiantecurso/Services/estudicurso.service';


@Component({
  selector: 'app-estudiantecurso',
  templateUrl: './estudiantecurso.component.html',
  styleUrls: ['./estudiantecurso.component.css']
})
export class EstudiantecursoComponent implements OnInit {


  Modelo: Modelo= {
    
    id_estudiante: '',
    id_curso: '',
    status: '',
    fecha_inicio: '',
    fecha_fin:''

  }
  constructor( private EstudicursoService : EstudicursoService, private router:Router) { }

  ngOnInit(): void {
  }
  agregar(){
  
    
    this.EstudicursoService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listarestudiantecurso']);
   }

}
