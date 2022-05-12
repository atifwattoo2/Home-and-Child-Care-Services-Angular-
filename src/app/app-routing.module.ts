import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AtifComponent } from './components/atif/atif.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ClientMenuComponent } from './components/client-menu/client-menu.component';
import { CandidateMenuComponent } from './components/candidate-menu/candidate-menu.component';
import { ClientConfirmationComponent } from './components/client-confirmation/client-confirmation.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

const routes: Routes = [
  { path: 'atif', component: AtifComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'our-services', component: OurServicesComponent},
  { path: 'sign-up' , component: SignUpComponent},
  { path: 'sign-in' , component: SignInComponent},
  { path: 'client-menu', component: ClientMenuComponent},
  { path: 'candidate-component' , component: CandidateMenuComponent},
  { path: 'client-confirmation' , component: ClientConfirmationComponent},
  { path: 'candidate-menu' , component: CandidateMenuComponent},
  { path: 'client-confirmation' , component: ClientConfirmationComponent},
  { path: 'candidate-form' , component: CandidateFormComponent},
  { path: 'client-form' , component: ClientFormComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
