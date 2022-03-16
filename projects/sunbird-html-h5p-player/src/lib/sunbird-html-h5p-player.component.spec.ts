import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbirdHtmlH5pPlayerComponent } from './sunbird-html-h5p-player.component';

describe('SunbirdHtmlH5pPlayerComponent', () => {
  let component: SunbirdHtmlH5pPlayerComponent;
  let fixture: ComponentFixture<SunbirdHtmlH5pPlayerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SunbirdHtmlH5pPlayerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SunbirdHtmlH5pPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
