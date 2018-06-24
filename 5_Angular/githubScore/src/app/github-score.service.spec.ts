import { TestBed, inject } from '@angular/core/testing';

import { GithubScoreService } from './github-score.service';

describe('GithubScoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubScoreService]
    });
  });

  it('should be created', inject([GithubScoreService], (service: GithubScoreService) => {
    expect(service).toBeTruthy();
  }));
});
