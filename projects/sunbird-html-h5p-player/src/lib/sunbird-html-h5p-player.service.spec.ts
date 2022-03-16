import { TestBed } from '@angular/core/testing';

import { SunbirdHtmlH5pPlayerService } from './sunbird-html-h5p-player.service';

describe('SunbirdHtmlH5pPlayerService', () => {
  let service: SunbirdHtmlH5pPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SunbirdHtmlH5pPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
