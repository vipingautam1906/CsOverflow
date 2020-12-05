import { TestBed } from '@angular/core/testing';

import { CommentandanswerService } from './commentandanswer.service';

describe('CommentandanswerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommentandanswerService = TestBed.get(CommentandanswerService);
    expect(service).toBeTruthy();
  });
});
