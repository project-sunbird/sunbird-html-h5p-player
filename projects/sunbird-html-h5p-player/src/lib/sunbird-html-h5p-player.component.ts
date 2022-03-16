import { Component, ElementRef, HostListener, OnInit, ViewChild, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'sunbird-html-h5p-player',
  templateUrl: './sunbird-html-h5p-player.html',
  styles: [
  ]
})
export class SunbirdHtmlH5pPlayerComponent implements OnInit {

  @ViewChild('iframe', { static: true })
  iframeRef!: ElementRef;

  private actionsMap = new Map([
    ['ZOOM_OUT', 'zoomout'],
    ['NEXT', 'nextpage'],
    ['PREVIOUS', 'previouspage'],
    ['ROTATE_CW', 'rotatecw'],
    ['DOWNLOAD', 'download']
  ]);
  @Input() playerConfig: any;
  mypreview: SafeResourceUrl | undefined;

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.mypreview = this.sanitizer.bypassSecurityTrustResourceUrl(this.playerConfig?.streamingUrl + '/index.html');
  }

}
