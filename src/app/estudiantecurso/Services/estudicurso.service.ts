import { Injectable } from '@angular/core';
import{HttpClient}from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class EstudicursoService {
  url="https://appinuevo.herokuapp.com/estudiante_curso"
  constructor( private http:HttpClient) { }

  getModelos(){
    return this.http.get(this.url);
  }

  //get un boleto
  getunmodelo(id:string){
    return this.http.get(this.url+'/'+id);
  }

  //Crear
  addmodelo(modelo:Modelo){
    return this.http.post(this.url,modelo);

  }

  //eliminar
  eliminarmodelo(id:string){
    return this.http.delete(this.url+'/'+id);
  }

  //modificar
  editmodelo(id:string, modelo:Modelo){
    return this.http.put(this.url+'/'+id,modelo);

  }
}
export interface Modelo {
  id?:any;
  id_estudiante: string;
  id_curso: string;
  status: string;
  fecha_inicio: string;
  fecha_fin:string
}
