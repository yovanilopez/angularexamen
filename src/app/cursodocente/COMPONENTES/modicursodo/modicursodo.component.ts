import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo, CursodoService } from './../../Services/cursodo.service';

@Component({
  selector: 'app-modicursodo',
  templateUrl: './modicursodo.component.html',
  styleUrls: ['./modicursodo.component.css']
})
export class ModicursodoComponent implements OnInit {

  Modelo: Modelo= {
    
    id_docente: '',
    id_curso: '',
    stauts:'',
    fecha_inicio: '',
    fecha_fin: ''
  }

  constructor(private CursodoService:CursodoService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.CursodoService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.CursodoService.editmodelo(this.Modelo.id, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listarcursodocente'])
  }
}

  