import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursomodifComponent } from './cursomodif.component';

describe('CursomodifComponent', () => {
  let component: CursomodifComponent;
  let fixture: ComponentFixture<CursomodifComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursomodifComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursomodifComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
