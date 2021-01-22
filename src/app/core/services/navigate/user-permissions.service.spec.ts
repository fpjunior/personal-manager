/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserPermissionsService } from './user-permissions.service';

describe('Service: UserPermissions', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPermissionsService]
    });
  });

  it('should ...', inject([UserPermissionsService], (service: UserPermissionsService) => {
    expect(service).toBeTruthy();
  }));
});
