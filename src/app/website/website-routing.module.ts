import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import appConfig from '../config/appConfig';
import { ServicesComponent } from '../services/services.component';
import { AboutpageComponent } from './aboutpage/aboutpage.component';
import { AiComponent } from './ai/ai.component';
import { AutomationtestappComponent } from './automationtestapp/automationtestapp.component';
import { CareerComponent } from './career/career.component';
import { CertificationComponent } from './certification/certification.component';
import { ClouddesktopComponent } from './clouddesktop/clouddesktop.component';
import { ComputervisionComponent } from './computervision/computervision.component';
import { ConnectivityComponent } from './connectivity/connectivity.component';
import { ContactusComponent } from './contactus/contactus.component';
import { FivegComponent } from './fiveg/fiveg.component';
import { FivegsolutionComponent } from './fivegsolution/fivegsolution.component';
import { GreynComponent } from './greyn/greyn.component';
import { GryphionComponent } from './gryphion/gryphion.component';
import { HomeComponent } from './home/home.component';
import { IndiotplatformComponent } from './indiotplatform/indiotplatform.component';
import { IotComponent } from './iot/iot.component';
import { LabComponent } from './lab/lab.component';
import { LatestworkComponent } from './latestwork/latestwork.component';
import { LegalComponent } from './legal/legal.component';
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
import { TermsComponent } from './terms/terms.component';
import { TestingautomationComponent } from './testingautomation/testingautomation.component';
import { WhyusComponent } from './whyus/whyus.component';
import { WifisolutionComponent } from './wifisolution/wifisolution.component';
import { WirelesstechnologyComponent } from './wirelesstechnology/wirelesstechnology.component';
const routes: Routes = [
  { path: appConfig.routes.home, component: HomeComponent },
  { path: appConfig.routes.def, component: HomeComponent },
  { path: appConfig.routes.career, component: CareerComponent },
  { path: appConfig.routes.contactus, component: ContactusComponent },
  { path: appConfig.routes.whyus, component: WhyusComponent },
  {
    path: appConfig.routes.recentworkcat +'/:name'+ '/:id',
    component: GryphionComponent,
  },
  { path: appConfig.routes.fiveg, component: FivegComponent },
  { path: appConfig.routes.lab, component: LabComponent },
  { path: appConfig.routes.greyn, component: GreynComponent },
  { path: appConfig.routes.mobileapps, component: MobileappsComponent },
  { path: appConfig.routes.recentworks, component: RecentworksComponent },
  { path: appConfig.routes.mainservice, component: MainserviceComponent },
  { path: appConfig.routes.mainservice, component: MainserviceComponent },

  {
    path: appConfig.routes.service +'/:name'+ '/:id',
    component: ServicesComponent,
  },
  {
    path: appConfig.routes.singleservice + '/:id',
    component: NetworkstackComponent,
  },
  { path: appConfig.routes.fivegsolution, component: FivegsolutionComponent },
  { path: appConfig.routes.connectivity, component: ConnectivityComponent },
  { path: appConfig.routes.linuxandroid, component: LinuxandroidComponent },
  {
    path: appConfig.routes.testingautomation,
    component: TestingautomationComponent,
  },
  {
    path: appConfig.routes.wirelesstechnology,
    component: WirelesstechnologyComponent,
  },
  {
    path: appConfig.routes.wifisolution,
    component: WifisolutionComponent,
  },
  {
    path: appConfig.routes.clouddesktop,
    component: ClouddesktopComponent,
  },
  {
    path: appConfig.routes.iot,
    component: IotComponent,
  },
  {
    path: appConfig.routes.ai,
    component: AiComponent,
  },
  {
    path: appConfig.routes.certification,
    component: CertificationComponent,
  },
  {
    path: appConfig.routes.mobility,
    component: MobilityComponent,
  },
  {
    path: appConfig.routes.mobileapplication,
    component: MobileapplicationComponent,
  },
  {
    path: appConfig.routes.computervision,
    component: ComputervisionComponent,
  },
  {
    path: appConfig.routes.successstory,
    component: SuccessstoriesComponent,
  },
  {
    path: appConfig.routes.autotestapp,
    component: AutomationtestappComponent,
  },
  {
    path: appConfig.routes.securityiot,
    component: SecurityiotComponent,
  },
  {
    path: appConfig.routes.iniotplat,
    component: IndiotplatformComponent,
  },
  {
    path: appConfig.routes.multibandfiveg,
    component: MultibandgatewayComponent,
  },
  {
    path: appConfig.routes.aboutus,
    component: AboutpageComponent,
  },
  {
    path: appConfig.routes.latestwork,
    component: LatestworkComponent,
  },
  {
    path: appConfig.routes.terms,
    component: TermsComponent,
  },
  {
    path: appConfig.routes.legal,
    component: LegalComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WebsiteRoutingModule {}
