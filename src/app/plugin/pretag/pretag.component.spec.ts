import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PretagComponent } from './pretag.component';

describe('PretagComponent', () => {
  let component: PretagComponent;
  let fixture: ComponentFixture<PretagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PretagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PretagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
