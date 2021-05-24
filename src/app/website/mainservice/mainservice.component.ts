import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';

@Component({
  selector: 'app-mainservice',
  templateUrl: './mainservice.component.html',
})
export class MainserviceComponent implements OnInit {
  appConfig: any;
  constructor() {}

  ngOnInit(): void {
    this.appConfig = appConfig;
  }
}
