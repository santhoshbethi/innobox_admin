import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterModule } from '@angular/router';
import { SnackbarModule } from 'ngx-snackbar';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AiComponent } from './ai/ai.component';
import { AutomationtestappComponent } from './automationtestapp/automationtestapp.component';
import { CareerComponent } from './career/career.component';
import { CertificationComponent } from './certification/certification.component';
import { ClouddesktopComponent } from './clouddesktop/clouddesktop.component';
import { CommonsectionComponent } from './commonsection/commonsection.component';
import { ComputervisionComponent } from './computervision/computervision.component';
import { ConnectivityComponent } from './connectivity/connectivity.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FivegComponent } from './fiveg/fiveg.component';
import { FivegsolutionComponent } from './fivegsolution/fivegsolution.component';
import { GetintouchComponent } from './getintouch/getintouch.component';
import { GreynComponent } from './greyn/greyn.component';
import { GryphionComponent } from './gryphion/gryphion.component';
import { HomeComponent } from './home/home.component';
import { IndiotplatformComponent } from './indiotplatform/indiotplatform.component';
import { IotComponent } from './iot/iot.component';
import { LabComponent } from './lab/lab.component';
import { LatestworkComponent } from './latestwork/latestwork.component';
import { LinuxandroidComponent } from './linuxandroid/linuxandroid.component';
import { MainserviceComponent } from './mainservice/mainservice.component';
import { MobileapplicationComponent } from './mobileapplication/mobileapplication.component';
import { MobileappsComponent } from './mobileapps/mobileapps.component';
import { MobilityComponent } from './mobility/mobility.component';
import { MultibandgatewayComponent } from './multibandgateway/multibandgateway.component';
import { NetworkstackComponent } from './networkstack/networkstack.component';
import { RecentworksComponent } from './recentworks/recentworks.component';
import { SecurityiotComponent } from './securityiot/securityiot.component';
import { SuccessstoriesComponent } from './successstories/successstories.component';
import { TestingautomationComponent } from './testingautomation/testingautomation.component';
import { WebsiteRoutingModule } from './website-routing.module';
import { WhyusComponent } from './whyus/whyus.component';
import { WifisolutionComponent } from './wifisolution/wifisolution.component';
import { WirelesstechnologyComponent } from './wirelesstechnology/wirelesstechnology.component';
import { TermsComponent } from './terms/terms.component';
import { LegalComponent } from './legal/legal.component';

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
    GetintouchComponent,
    AboutpageComponent,
    AutomationtestappComponent,
    SecurityiotComponent,
    IndiotplatformComponent,
    LatestworkComponent,

    MultibandgatewayComponent,
     TermsComponent,
     LegalComponent,
  ],
  imports: [
    CommonModule,
    WebsiteRoutingModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    SnackbarModule.forRoot(),
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  providers: [],
})
export class WebsiteModule {}
