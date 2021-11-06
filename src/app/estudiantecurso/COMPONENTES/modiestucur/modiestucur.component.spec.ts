import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiestucurComponent } from './modiestucur.component';

describe('ModiestucurComponent', () => {
  let component: ModiestucurComponent;
  let fixture: ComponentFixture<ModiestucurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiestucurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiestucurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
