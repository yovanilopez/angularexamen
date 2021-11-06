import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaestucursoComponent } from './listaestucurso.component';

describe('ListaestucursoComponent', () => {
  let component: ListaestucursoComponent;
  let fixture: ComponentFixture<ListaestucursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaestucursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaestucursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
