import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';
import {Title} from "@angular/platform-browser";
@Component({
  selector: 'app-legal',
  templateUrl: './legal.component.html',
  styleUrls: ['./legal.component.scss']
})
export class LegalComponent implements OnInit {
  appConfig: any;
  image:any;

  constructor(private api: ApiService,private titleService:Title) {
    this.titleService.setTitle("Innobox: Legal");
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
