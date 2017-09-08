import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Parallax, ParallaxConfig } from 'ngx-parallax';
import { DetailComponent } from './detail/detail.component';
import { MdSidenavModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MdSidenavModule
  ],
  declarations: [Parallax, DetailComponent],
  exports: [
    CommonModule,
    BrowserAnimationsModule,
    Parallax,
    MdSidenavModule
  ]
})
export class SharedModule { }
