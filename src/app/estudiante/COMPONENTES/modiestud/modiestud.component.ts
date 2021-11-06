import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo,EstudianteService } from './../../Services/estudiante.service';

@Component({
  selector: 'app-modiestud',
  templateUrl: './modiestud.component.html',
  styleUrls: ['./modiestud.component.css']
})
export class ModiestudComponent implements OnInit {
 
  Modelo: Modelo= {
    
    id_persona: '',
    fecha_ingreso: '',
    carnet: '',
    status: ''
  }


  constructor( private EstudianteService: EstudianteService , private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.EstudianteService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.EstudianteService.editmodelo(this.Modelo.id, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listaestudiante'])
  }
}


