import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-whyus',
  templateUrl: './whyus.component.html',
})
export class WhyusComponent implements OnInit {
  appConfig: any;
  whyus: any;
  image:any;
  constructor(private api: ApiService) {}
 
  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getAllServices();
    this.getImages();
  }
  getAllServices() {
    this.api.getWhyus().subscribe((res: any) => {
      if (res.message) {
        this.whyus = res.message;
     
      }
    });
  }
  getImages()
  {
    
      this.api.getTopimg().subscribe((res: any) => {
     
          this.image = res.message;
       
        console.log(this.image);
      });
  }
}