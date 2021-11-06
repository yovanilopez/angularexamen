import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {EstudianteService,Modelo } from 'src/app/estudiante/Services/estudiante.service';


@Component({
  selector: 'app-estudiante',
  templateUrl: './estudiante.component.html',
  styleUrls: ['./estudiante.component.css']
})
export class EstudianteComponent implements OnInit {
  Modelo: Modelo= {
    
    id_persona: '',
    fecha_ingreso: '',
    carnet: '',
    status: ''
  }
  constructor( private EstudianteService : EstudianteService, private router:Router) { }

  ngOnInit(): void {
  }
  agregar(){
  
    this.EstudianteService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listaestudiante']);
   }

}
