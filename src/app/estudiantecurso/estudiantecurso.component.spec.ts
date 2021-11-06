import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstudiantecursoComponent } from './estudiantecurso.component';

describe('EstudiantecursoComponent', () => {
  let component: EstudiantecursoComponent;
  let fixture: ComponentFixture<EstudiantecursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstudiantecursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstudiantecursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
