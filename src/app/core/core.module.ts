import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';
import { TopNavComponent } from './top-nav/top-nav.component';

import { DetailService } from './detail.service'

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  providers: [DetailService],
  declarations: [TopNavComponent],
  exports: [TopNavComponent]
})
export class CoreModule { 
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
  if (parentModule) {
    throw new Error(
      'CoreModule is already loaded. Import it in the AppModule only');
  }
}
}
