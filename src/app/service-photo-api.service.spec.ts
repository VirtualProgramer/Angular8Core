import { TestBed } from '@angular/core/testing';

import { ServicePhotoAPIService } from './service-photo-api.service';

describe('ServicePhotoAPIService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServicePhotoAPIService = TestBed.get(ServicePhotoAPIService);
    expect(service).toBeTruthy();
  });
});
