import { TestBed } from '@angular/core/testing';

import { TransmissionFormService } from './transmission-form.service';

describe('TransmissionFormService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TransmissionFormService = TestBed.get(TransmissionFormService);
    expect(service).toBeTruthy();
  });
});
