import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module'
import { CoreModule } from './core/core.module'
import { SharedModule } from './shared/shared.module'
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { TeamComponent } from './team/team.component';
import { LocationComponent } from './location/location.component';
import { AboutComponent } from './about/about.component';
import { TreatmentsComponent } from './treatments/treatments.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    TeamComponent,
    LocationComponent,
    AboutComponent,
    TreatmentsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CoreModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
