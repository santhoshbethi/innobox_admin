import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
})

export class AboutpageComponent implements OnInit {
  constructor(private api: ApiService,private titleService:Title) {
    this.titleService.setTitle("Innobox: About Us");
  }
  appConfig: any;

  emptlk: any;
  image:any;
  aboutus:any;
 
  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getAllServices();
    this.getImages();
    this.aboutusdata();
    
  }
  aboutusdata()
  {
    this.api.getaboutus().subscribe((res: any) => {
      if (res.message) {
        this.emptlk = res.message;
     
      }
    }); 
  }
  updateHomeslder(data:any)
  {
console.log(data);
  }
  getAllServices() {
    this.api.getemptlk().subscribe((res: any) => {
  
        this.aboutus = res.message;
     
      
      
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