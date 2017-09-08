import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
 
import { MainComponent }   from './main/main.component';
import { TeamComponent }   from './team/team.component';
import { AboutComponent }   from './about/about.component';
import { LocationComponent }   from './location/location.component';
import { TreatmentsComponent } from './treatments/treatments.component';
import { DetailComponent } from './shared/detail/detail.component';

const appRoutes: Routes = [
  { path: 'main', component: MainComponent },
  { path: 'about', component: AboutComponent },
  { path: 'location', component: LocationComponent },
  { path: 'team', component: TeamComponent, children: [
    {
      path:":detailKey",
      component: DetailComponent
    }
  ]},
  { path: 'treatments', component: TreatmentsComponent, children: [
    {
      path:":detailKey",
      component: DetailComponent
    }
  ]},
  { path: '',   redirectTo: '/main', pathMatch: 'full' },
  { path: '**', redirectTo: '/main', pathMatch: 'full' }
];
 
@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}