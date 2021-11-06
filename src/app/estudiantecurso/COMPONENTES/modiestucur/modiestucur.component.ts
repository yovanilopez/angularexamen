import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo, EstudicursoService } from './../../Services/estudicurso.service';

@Component({
  selector: 'app-modiestucur',
  templateUrl: './modiestucur.component.html',
  styleUrls: ['./modiestucur.component.css']
})
export class ModiestucurComponent implements OnInit {


  Modelo: Modelo= {
    
    id_estudiante: '',
    id_curso: '',
    status: '',
    fecha_inicio: '',
    fecha_fin:''
  }
  constructor(private EstudicursoService:EstudicursoService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.EstudicursoService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }

  modificar() {
    this.EstudicursoService.editmodelo(this.Modelo.id, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listarestudiantecurso'])
  }
}
