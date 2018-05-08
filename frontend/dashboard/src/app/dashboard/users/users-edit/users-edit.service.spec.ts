import { TestBed, inject } from '@angular/core/testing';

import { UsersEditService } from './users-edit.service';

describe('UsersEditService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UsersEditService]
    });
  });

  it('should be created', inject([UsersEditService], (service: UsersEditService) => {
    expect(service).toBeTruthy();
  }));
});
