import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CareerComponent } from './career/career.component';
import { CommonsectionComponent } from './commonsection/commonsection.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FivegComponent } from './fiveg/fiveg.component';
import { GreynComponent } from './greyn/greyn.component';
import { GryphionComponent } from './gryphion/gryphion.component';
import { HomeComponent } from './home/home.component';
import { LabComponent } from './lab/lab.component';
import { MainserviceComponent } from './mainservice/mainservice.component';
import { MobileappsComponent } from './mobileapps/mobileapps.component';
import { NetworkstackComponent } from './networkstack/networkstack.component';
import { RecentworksComponent } from './recentworks/recentworks.component';
import { SuccessstoriesComponent } from './successstories/successstories.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { WhyusComponent } from './whyus/whyus.component';
import { FivegsolutionComponent } from './fivegsolution/fivegsolution.component';
import { ConnectivityComponent } from './connectivity/connectivity.component';
import { LinuxandroidComponent } from './linuxandroid/linuxandroid.component';
import { TestingautomationComponent } from './testingautomation/testingautomation.component';
import { WirelesstechnologyComponent } from './wirelesstechnology/wirelesstechnology.component';
import { WifisolutionComponent } from './wifisolution/wifisolution.component';
import { ClouddesktopComponent } from './clouddesktop/clouddesktop.component';
import { IotComponent } from './iot/iot.component';
import { AiComponent } from './ai/ai.component';
import { CertificationComponent } from './certification/certification.component';
import { MobilityComponent } from './mobility/mobility.component';
import { MobileapplicationComponent } from './mobileapplication/mobileapplication.component';
import { ComputervisionComponent } from './computervision/computervision.component';

@NgModule({
  declarations: [
    CareerComponent,
    ContactusComponent,
    WhyusComponent,
    RecentworksComponent,
    SuccessstoriesComponent,
    HomeComponent,
    GryphionComponent,
    CommonsectionComponent,
    FivegComponent,
    MainserviceComponent,
    NetworkstackComponent,
    LabComponent,
    GreynComponent,
    MobileappsComponent,
    FivegsolutionComponent,
    ConnectivityComponent,
    LinuxandroidComponent,
    TestingautomationComponent,
    WirelesstechnologyComponent,
    WifisolutionComponent,
    ClouddesktopComponent,
    IotComponent,
    AiComponent,
    CertificationComponent,
    MobilityComponent,
    MobileapplicationComponent,
    ComputervisionComponent,
  ],
  imports: [CommonModule, WebsiteRoutingModule, RouterModule],
})
export class WebsiteModule {}
