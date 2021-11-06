import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaestuComponent } from './listaestu.component';

describe('ListaestuComponent', () => {
  let component: ListaestuComponent;
  let fixture: ComponentFixture<ListaestuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaestuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaestuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
