import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicursodoComponent } from './inicursodo.component';

describe('InicursodoComponent', () => {
  let component: InicursodoComponent;
  let fixture: ComponentFixture<InicursodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicursodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InicursodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
