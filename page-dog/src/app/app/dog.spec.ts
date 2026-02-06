import { TestBed } from '@angular/core/testing';

import { Dog } from './dog';

describe('Dog', () => {
  let service: Dog;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Dog);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
