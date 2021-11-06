import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {DoceService,Modelo } from 'src/app/docentes/Services/doce.service';


@Component({
  selector: 'app-docentes',
  templateUrl: './docentes.component.html',
  styleUrls: ['./docentes.component.css']
})
export class DocentesComponent implements OnInit {

  Modelo: Modelo= {
    
    id_persona: '',
    fecha_ingreso: '',
   
  }
  constructor( private DoceService : DoceService, private router:Router) { }

  ngOnInit(): void {
  }

  agregar(){
  
    
    this.DoceService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listadocente']);
   }
 

}
