import { TestBed, inject } from '@angular/core/testing';

import { UsersNewService } from './users-new.service';

describe('UsersNewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersNewService]
    });
  });

  it('should be created', inject([UsersNewService], (service: UsersNewService) => {
    expect(service).toBeTruthy();
  }));
});
