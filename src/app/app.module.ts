import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { PersonasComponent } from './personas/personas.component';
import { ListaComponent } from './personas/COMPONENTES/lista/lista.component';
import { ModificarComponent } from './personas/COMPONENTES/modificar/modificar.component';
import { FormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';
import { CursoComponent } from './curso/curso.component';
import { CursolistaComponent } from './curso/COMPONENTES/cursolista/cursolista.component';
import { CursomodifComponent } from './curso/COMPONENTES/cursomodif/cursomodif.component';
import { DocentesComponent } from './docentes/docentes.component';
import { ListadocenteComponent } from './docentes/COMPONENTES/listadocente/listadocente.component';
import { ModifidocenteComponent } from './docentes/COMPONENTES/modifidocente/modifidocente.component';
import { EstudianteComponent } from './estudiante/estudiante.component';
import { ListaestuComponent } from './estudiante/COMPONENTES/listaestu/listaestu.component';
import { ModiestudComponent } from './estudiante/COMPONENTES/modiestud/modiestud.component';
import { CursodocenteComponent } from './cursodocente/cursodocente.component';
import { InicursodoComponent } from './cursodocente/COMPONENTES/inicursodo/inicursodo.component';
import { ModicursodoComponent } from './cursodocente/COMPONENTES/modicursodo/modicursodo.component';
import { EstudiantecursoComponent } from './estudiantecurso/estudiantecurso.component';
import { ListaestucursoComponent } from './estudiantecurso/COMPONENTES/listaestucurso/listaestucurso.component';
import { ModiestucurComponent } from './estudiantecurso/COMPONENTES/modiestucur/modiestucur.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';



@NgModule({
  declarations: [
    AppComponent,
    
    PersonasComponent,
    ListaComponent,
    ModificarComponent,
    CursoComponent,
    CursolistaComponent,
    CursomodifComponent,
    DocentesComponent,
    ListadocenteComponent,
    ModifidocenteComponent,
    EstudianteComponent,
    ListaestuComponent,
    ModiestudComponent,
    CursodocenteComponent,
    InicursodoComponent,
    ModicursodoComponent,
    EstudiantecursoComponent,
    ListaestucursoComponent,
    ModiestucurComponent,
    NavComponent,

 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {  }
