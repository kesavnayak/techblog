import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XamarinComponent } from './xamarin.component';

describe('XamarinComponent', () => {
  let component: XamarinComponent;
  let fixture: ComponentFixture<XamarinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XamarinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XamarinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
