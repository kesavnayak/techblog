import { TestBed } from '@angular/core/testing';

import { QuestioncategoryService } from './questioncategory.service';

describe('QuestioncategoryService', () => {
  let service: QuestioncategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestioncategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
