import { TestBed, inject } from '@angular/core/testing';

import { NinjaHandlerService } from './ninja-handler.service';

describe('NinjaHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NinjaHandlerService]
    });
  });

  it('should be created', inject([NinjaHandlerService], (service: NinjaHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
