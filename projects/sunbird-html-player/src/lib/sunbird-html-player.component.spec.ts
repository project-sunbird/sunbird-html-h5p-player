import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SunbirdHtmlPlayerComponent } from './sunbird-html-player.component';

describe('SunbirdHtmlPlayerComponent', () => {
  let component: SunbirdHtmlPlayerComponent;
  let fixture: ComponentFixture<SunbirdHtmlPlayerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SunbirdHtmlPlayerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SunbirdHtmlPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
