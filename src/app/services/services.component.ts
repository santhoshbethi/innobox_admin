import { Component, OnInit ,Inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { ApiService } from './api.service';
import appConfig from 'src/app/config/appConfig';
import {Title} from "@angular/platform-browser";
declare const test: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  id: any;
  res: any;
  highlightValues:any;
  otherServices:any;
  appConfig: any;
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private route: ActivatedRoute,
    public api: ApiService,
    private titleService:Title
  ) {
    this.titleService.setTitle("Innobox: Services");
   }
 

  ngOnInit(): void {
    
    
this.route.params.subscribe(routeParams => {
  this.id = this.route.snapshot.params['id'];
   
    this.getHighlights(this.id);
    this.getOtherservices(this.id);
this.appConfig=appConfig;
    this.api.getServiceById(this.id).subscribe((response: any) => {
      this.res = response.message[0].maindata;
    
     }, error => {
       console.log("error");
     });
    });
   

  }

  getHighlights(id: number){
    const formatData = this.formatData(this.id);
    this.api.getServiceHighlightById({"id":this.id}).subscribe((response: any) => {
      this.highlightValues = response.message;
      
     }, error => {
       console.log("error");
     });
  }
  getOtherservices(id:number)
  {
    const formatData = this.formatData(this.id);
    this.api.getOtherservices({"id":this.id}).subscribe((response: any) => {
      this.otherServices = response.message;
      console.log(this.otherServices);
     }, error => {
       console.log("error");
     });
  }

  formatData(id:any) {
    return {
      id: id,
    };
  }
}
