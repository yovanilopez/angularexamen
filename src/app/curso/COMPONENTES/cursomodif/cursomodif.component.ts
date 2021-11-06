import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo, CursosService } from './../../Services/cursos.service';

@Component({
  selector: 'app-cursomodif',
  templateUrl: './cursomodif.component.html',
  styleUrls: ['./cursomodif.component.css']
})
export class CursomodifComponent implements OnInit {

  Modelo: Modelo= {
    
    nombre: '',
    descripcion: '',
    
  }

  constructor( private CursosService:CursosService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {

    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.CursosService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }

  modificar() {
    this.CursosService.editmodelo(this.Modelo.id, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listacurso'])
  }
}
