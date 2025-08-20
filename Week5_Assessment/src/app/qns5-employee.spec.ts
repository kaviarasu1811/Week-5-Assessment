import { TestBed } from '@angular/core/testing';

import { Qns5Employee } from './qns5-employee';

describe('Qns5Employee', () => {
  let service: Qns5Employee;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Qns5Employee);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
