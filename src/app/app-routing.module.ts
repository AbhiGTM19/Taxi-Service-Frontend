import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration-page/registration.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { FaqComponent } from './faq/faq.component';
import { FigmaDesignPageComponent } from './figma-test/figma-test.component';

const routes: Routes = [

  { path: '', redirectTo: '/rvtaxiservices', pathMatch: 'full' } ,

  // Landing Page route
  { path: 'rvtaxiservices', component: FigmaDesignPageComponent},

  // { path: 'test', component: LandingPageComponent },

  // Registration Page route
  { path: 'register', component: RegistrationComponent },

  // FAQ Page route
  { path: 'faq', component: FaqComponent},



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
