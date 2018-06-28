import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LocationComponent } from './location/location.component';
import { ErrorComponent } from './error/error.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: LandingComponent },
  { path: 'seattle', pathMatch: 'full', component: LocationComponent },
  { path: 'sanjose', pathMatch: 'full', component: LocationComponent },
  { path: 'burbank', pathMatch: 'full', component: LocationComponent },
  { path: 'dallas', pathMatch: 'full', component: LocationComponent },
  { path: 'dc', pathMatch: 'full', component: LocationComponent },
  { path: 'chicago', pathMatch: 'full', component: LocationComponent },
  { path: 'pittsburgh', pathMatch: 'full', component: LocationComponent },
  { path: '**', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
