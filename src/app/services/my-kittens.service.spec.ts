import { TestBed } from '@angular/core/testing';

import { MyKittensService } from './my-kittens.service';

describe('MyKittensService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyKittensService = TestBed.get(MyKittensService);
    expect(service).toBeTruthy();
  });
});
