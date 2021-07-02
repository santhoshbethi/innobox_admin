import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";
import appConfig from 'src/app/config/appConfig';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
})
export class AboutpageComponent implements OnInit {
  constructor(private titleService:Title) {
    this.titleService.setTitle("Innobox: About Us");
  }
  appConfig: any;
  ngOnInit(): void {
    this.appConfig = appConfig;
  }
}
