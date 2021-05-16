import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import appConfig from '../config/appConfig';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WhyusComponent } from './whyus/whyus.component';
const routes: Routes = [
  { path: appConfig.routes.career, component: CareerComponent },
  { path: appConfig.routes.contactus, component: ContactusComponent },
  { path: appConfig.routes.whyus, component: WhyusComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
