import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
})
export class AboutpageComponent implements OnInit {
  constructor() {}
  appConfig: any;
  ngOnInit(): void {
    this.appConfig = appConfig;
  }
}
