import { TestBed } from '@angular/core/testing';

import { MetalArchivesApiService } from './metal-archives-api.service';

describe('MetalArchivesApiService', () => {
  let service: MetalArchivesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MetalArchivesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
