import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { SpecialtyComponent } from './specialty/specialty.component';
import { InsuranceComponent } from './insurance/insurance.component';
import { RatesComponent } from './rates/rates.component';
import { BookingComponent } from './booking/booking.component';
import { HomeComponent } from './home/home.component';
import { CostCoverageComponent } from './cost-coverage/cost-coverage.component';
import { ContactComponent } from './contact/contact.component';
import {HoursTransformPipe} from "./hours-transform.pipe";
import { ConditionCardComponent } from './condition-card/condition-card.component';
import { ComingSoonComponent } from './coming-soon/coming-soon.component';
import {environment} from "../environments/environment";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    SpecialtyComponent,
    InsuranceComponent,
    RatesComponent,
    BookingComponent,
    HomeComponent,
    CostCoverageComponent,
    ContactComponent,
    HoursTransformPipe,
    ConditionCardComponent,
    ComingSoonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
