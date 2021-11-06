import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifidocenteComponent } from './modifidocente.component';

describe('ModifidocenteComponent', () => {
  let component: ModifidocenteComponent;
  let fixture: ComponentFixture<ModifidocenteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModifidocenteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifidocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
