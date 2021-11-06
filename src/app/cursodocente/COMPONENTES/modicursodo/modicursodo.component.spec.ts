import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModicursodoComponent } from './modicursodo.component';

describe('ModicursodoComponent', () => {
  let component: ModicursodoComponent;
  let fixture: ComponentFixture<ModicursodoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModicursodoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModicursodoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
