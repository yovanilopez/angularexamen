import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {BoletoService,Modelo } from 'src/app/personas/Services/boleto.service';


@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {
  
  Modelo: Modelo= {
    
     nombre: '',
     apellido: '',
     fecha_nacimiento: '',
     Direccion: ''
   }
  constructor( private BoletoService : BoletoService, private router:Router ) { }

  ngOnInit(): void {
  }

  agregar(){
  
    
   this.BoletoService.addmodelo(this.Modelo).subscribe();
    this.router.navigate(['/listapersona']);
  }

}
