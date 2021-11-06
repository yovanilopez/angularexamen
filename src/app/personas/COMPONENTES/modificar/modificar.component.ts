import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo, BoletoService } from './../../Services/boleto.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {
     
  Modelo: Modelo= {
    
    nombre: '',
    apellido: '',
    fecha_nacimiento: '',
    Direccion: ''
  }
 



  constructor( private BoletoService:BoletoService, private router:Router, private ActiveRoute:ActivatedRoute) { }
  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.BoletoService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.BoletoService.editmodelo(this.Modelo.id, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listapersona'])
  }
}

  