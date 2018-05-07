import { TestBed, inject } from '@angular/core/testing';

import { TestlibService } from './testlib.service';

describe('TestlibService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestlibService]
    });
  });

  it('should be created', inject([TestlibService], (service: TestlibService) => {
    expect(service).toBeTruthy();
  }));
});
