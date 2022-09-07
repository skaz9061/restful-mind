import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AboutComponent} from "./about/about.component";
import {HomeComponent} from "./home/home.component";
import {SpecialtyComponent} from "./specialty/specialty.component";
import {CostCoverageComponent} from "./cost-coverage/cost-coverage.component";
import {BookingComponent} from "./booking/booking.component";
import {ExternalLinkService} from "./external-link.service";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'specialty', component: SpecialtyComponent},
  {path: 'insurance', component: CostCoverageComponent},
  {path: 'rates', component: CostCoverageComponent},
  {path: 'booking', component: BookingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
