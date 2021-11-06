import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Modelo, DoceService } from './../../Services/doce.service';


@Component({
  selector: 'app-modifidocente',
  templateUrl: './modifidocente.component.html',
  styleUrls: ['./modifidocente.component.css']
})
export class ModifidocenteComponent implements OnInit {


  Modelo: Modelo= {
    
    id_persona: '',
    fecha_ingreso: '',
    
  }
  constructor(  private DoceService:DoceService, private router:Router, private ActiveRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada =  <string>this.ActiveRoute.snapshot.params.id;

    console.log('Id de entrada:' +id_entrada);

    if (id_entrada) {
      this.DoceService.getunmodelo(id_entrada).subscribe(
        (res: any) => {

          this.Modelo = <any>res[0];
          console.log(res[0])

        },
        err => console.log(err)

      );
    }
  }
  modificar() {
    this.DoceService.editmodelo(this.Modelo.id, this.Modelo).subscribe(
      res => {
        console.log(res)
      },
      err => console.log(err)
    );

 this.router.navigate(['listadocente'])
  }

}
