import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CursolistaComponent } from './curso/COMPONENTES/cursolista/cursolista.component';
import { CursomodifComponent } from './curso/COMPONENTES/cursomodif/cursomodif.component';
import { CursoComponent } from './curso/curso.component';
import { InicursodoComponent } from './cursodocente/COMPONENTES/inicursodo/inicursodo.component';
import { ModicursodoComponent } from './cursodocente/COMPONENTES/modicursodo/modicursodo.component';
import { CursodocenteComponent } from './cursodocente/cursodocente.component';
import { ListadocenteComponent } from './docentes/COMPONENTES/listadocente/listadocente.component';
import { ModifidocenteComponent } from './docentes/COMPONENTES/modifidocente/modifidocente.component';
import { DocentesComponent } from './docentes/docentes.component';
import { ListaestuComponent } from './estudiante/COMPONENTES/listaestu/listaestu.component';
import { ModiestudComponent } from './estudiante/COMPONENTES/modiestud/modiestud.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListaestucursoComponent } from './estudiantecurso/COMPONENTES/listaestucurso/listaestucurso.component';
import { ModiestucurComponent } from './estudiantecurso/COMPONENTES/modiestucur/modiestucur.component';
import { EstudiantecursoComponent } from './estudiantecurso/estudiantecurso.component';



import { ListaComponent } from './personas/COMPONENTES/lista/lista.component';
import { ModificarComponent } from './personas/COMPONENTES/modificar/modificar.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
  //PERSONA
  {path: 'listapersona',component:ListaComponent},
  {path: 'modificarpersona/:id',component:ModificarComponent},
  {path: 'agregarpersona',component:PersonasComponent},

  //cruso
  {path: 'listacurso',component:CursolistaComponent},
  {path: 'modificarcurso/:id',component:CursomodifComponent},
  {path: 'agregarcurso',component:CursoComponent},

  //docente
  {path: 'listadocente',component:ListadocenteComponent},
  {path: 'modificardocente/:id',component:ModifidocenteComponent},
  {path: 'agregardocente',component:DocentesComponent},

  //estudiante
  {path: 'listaestudiante',component:ListaestuComponent},
  {path: 'modificarestudiante/:id',component:ModiestudComponent},
  {path: 'agregarestudiante',component:EstudianteComponent},

  //curso docente
  {path: 'listarcursodocente',component:InicursodoComponent},
  {path: 'modificarcursodo/:id',component:ModicursodoComponent},
  {path: 'agregarcursodo',component:CursodocenteComponent},

  // estudiante curso

  {path: 'listarestudiantecurso',component:ListaestucursoComponent},
  {path: 'modificarestudiantecurso/:id',component:ModiestucurComponent},
  {path: 'agregarestudiantecurso',component:EstudiantecursoComponent},






  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
