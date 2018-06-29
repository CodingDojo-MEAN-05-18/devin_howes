import { TestBed, inject } from '@angular/core/testing';

import { ProductHandlerService } from './product-handler.service';

describe('ProductHandlerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProductHandlerService]
    });
  });

  it('should be created', inject([ProductHandlerService], (service: ProductHandlerService) => {
    expect(service).toBeTruthy();
  }));
});
