import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { ContactusComponent } from './contactus/contactus.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { WhyusComponent } from './whyus/whyus.component';
import { RecentworksComponent } from './recentworks/recentworks.component';
import { SuccessstoriesComponent } from './successstories/successstories.component';

@NgModule({
  declarations: [CareerComponent, ContactusComponent, WhyusComponent, RecentworksComponent, SuccessstoriesComponent],
  imports: [CommonModule, WebsiteRoutingModule, RouterModule],
})
export class WebsiteModule {}
