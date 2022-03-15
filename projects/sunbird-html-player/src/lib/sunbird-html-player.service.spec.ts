import { TestBed } from '@angular/core/testing';

import { SunbirdHtmlPlayerService } from './sunbird-html-player.service';

describe('SunbirdHtmlPlayerService', () => {
  let service: SunbirdHtmlPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunbirdHtmlPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
