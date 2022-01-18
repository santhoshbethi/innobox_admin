import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-mainservice',
  templateUrl: './mainservice.component.html',
})
export class MainserviceComponent implements OnInit {
  appConfig: any;
  services: any;
  image:any;
  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getAllServices();
    this.getImages();
  }
  getAllServices() {
    this.api.getAllServices().subscribe((res: any) => {
      if (res.message) {
        this.services = res.message;
        console.log(this.services);
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
