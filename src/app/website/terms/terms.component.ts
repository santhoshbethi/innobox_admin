import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  appConfig: any;
  image:any;

  constructor(private api: ApiService,private titleService:Title) {
    this.titleService.setTitle("Innobox: Privacy Policy");
  }

  ngOnInit(): void {
    this.appConfig=appConfig;
    this.getImages();
    
  }

getImages()
{
    
  this.api.getTopimg().subscribe((res: any) => {
 
      this.image = res.message;
   
    console.log(this.image);
  });
}
}
