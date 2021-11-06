import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursolistaComponent } from './cursolista.component';

describe('CursolistaComponent', () => {
  let component: CursolistaComponent;
  let fixture: ComponentFixture<CursolistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursolistaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursolistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
