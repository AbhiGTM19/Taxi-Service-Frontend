import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaqComponent } from './faq/faq.component';
import { FigmaDesignPageComponent } from './figma-test/figma-test.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TermsOfServiceComponent } from './terms-of-service/terms-of-service.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { RefundPolicyComponent } from './refund-policy/refund-policy.component';

const routes: Routes = [

  // Redirect to this URL if no other path matches.
  { path: '', redirectTo: '/rvtaxiservices', pathMatch: 'full' },

  // Landing Page route
  { path: 'rvtaxiservices', 
    component: FigmaDesignPageComponent
   },

  // FAQ Page route
  { path: 'faq', 
    component: FaqComponent
   },

   // About Us Page route
   {
    path : 'about-us',
    component : AboutUsComponent
   },

   // Terms Of Service Page route
   {
    path : 'terms-of-service',
    component : TermsOfServiceComponent
   },

   // Privacy Policy Page route
   {
    path : 'privacy-policy',
    component : PrivacyPolicyComponent
   },

   // Refund Policy Page route
   {
    path : 'refund-policy',
    component : RefundPolicyComponent
   },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
