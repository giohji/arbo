import { Component, OnInit, HostListener, Inject, ElementRef, ViewChild } from '@angular/core';
import {  trigger,  state,  style,  animate,  transition} from '@angular/animations';
import { DOCUMENT } from "@angular/platform-browser";

@Component({
  selector: 'top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.css'],
  animations: [
    trigger('itemState', [
      state('visible', style({
        position: 'relative',
        width: '100px',
        left: '0'
      })),
      state('hidden',   style({
        position: 'relative',
        width: '100px',
        left: '-100px'
      })),
      transition('visible => hidden', animate('100ms ease-in')),
      transition('hidden => visible', animate('100ms ease-out'))
    ])
  ]
})
export class TopNavComponent implements OnInit {
  altTitleState: string = "hidden";
  @ViewChild('header') elementView: ElementRef;
  constructor( @Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    let number = this.document.body.scrollTop;
    if (number > this.elementView.nativeElement.offsetHeight) {
      this.altTitleState = "visible";
    } else if (this.altTitleState && number < this.elementView.nativeElement.offsetHeight) {
      this.altTitleState = "hidden";
    }
  }

}
