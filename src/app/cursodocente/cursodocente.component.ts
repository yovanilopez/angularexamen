import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CursodoService,Modelo } from 'src/app/cursodocente/Services/cursodo.service';


@Component({
  selector: 'app-cursodocente',
  templateUrl: './cursodocente.component.html',
  styleUrls: ['./cursodocente.component.css']
})
export class CursodocenteComponent implements OnInit {
    
  Modelo: Modelo= {
    
    id_docente: '',
    id_curso: '',
    stauts: '',
    fecha_inicio: '',
    fecha_fin: ''
  }

  
  constructor(private CursodoService : CursodoService, private router:Router) { }

  ngOnInit(): void {
  }
  agregar(){
  
    
    this.CursodoService.addmodelo(this.Modelo).subscribe();
     this.router.navigate(['/listarcursodocente']);
   }

}
