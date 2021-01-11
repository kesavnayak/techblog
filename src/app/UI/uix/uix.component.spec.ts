import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UixComponent } from './uix.component';

describe('UixComponent', () => {
  let component: UixComponent;
  let fixture: ComponentFixture<UixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
