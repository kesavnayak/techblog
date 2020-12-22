import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyquestionsComponent } from './companyquestions.component';

describe('CompanyquestionsComponent', () => {
  let component: CompanyquestionsComponent;
  let fixture: ComponentFixture<CompanyquestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyquestionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyquestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
