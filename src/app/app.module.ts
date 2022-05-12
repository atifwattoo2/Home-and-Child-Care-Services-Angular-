import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { OurServicesComponent } from './components/our-services/our-services.component';
import { FooterComponent } from './components/footer/footer.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { AtifComponent } from './components/atif/atif.component';
import { NavComponent } from './components/nav/nav.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { ClientMenuComponent } from './components/client-menu/client-menu.component';
import { UserMenuComponent } from './components/user-menu/user-menu.component';
import { CandidateComponent } from './components/candidate/candidate.component';
import { CandidateMenuComponent } from './components/candidate-menu/candidate-menu.component';
import { ClientConfirmationComponent } from './components/client-confirmation/client-confirmation.component';
import { CandidateFormComponent } from './components/candidate-form/candidate-form.component';
import { ClientFormComponent } from './components/client-form/client-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    OurServicesComponent,
    FooterComponent,
    SignUpComponent,
    AtifComponent,
    NavComponent,
    SignInComponent,
    LoginComponent,
    ClientMenuComponent,
    UserMenuComponent,
    CandidateComponent,
    CandidateMenuComponent,
    ClientConfirmationComponent,
    CandidateFormComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
