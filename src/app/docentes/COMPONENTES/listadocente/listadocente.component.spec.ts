import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadocenteComponent } from './listadocente.component';

describe('ListadocenteComponent', () => {
  let component: ListadocenteComponent;
  let fixture: ComponentFixture<ListadocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListadocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
