import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModiestudComponent } from './modiestud.component';

describe('ModiestudComponent', () => {
  let component: ModiestudComponent;
  let fixture: ComponentFixture<ModiestudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModiestudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModiestudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
