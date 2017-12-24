import { TestBed, inject } from '@angular/core/testing';

import { FormTypesService } from './form-types.service';

describe('FormTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FormTypesService]
    });
  });

  it('should be created', inject([FormTypesService], (service: FormTypesService) => {
    expect(service).toBeTruthy();
  }));
});
