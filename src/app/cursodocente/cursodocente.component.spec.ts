import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursodocenteComponent } from './cursodocente.component';

describe('CursodocenteComponent', () => {
  let component: CursodocenteComponent;
  let fixture: ComponentFixture<CursodocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursodocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursodocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
