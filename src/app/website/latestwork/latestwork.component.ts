import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';

@Component({
  selector: 'app-latestwork',
  templateUrl: './latestwork.component.html',
  styleUrls: ['./latestwork.component.scss'],
})
export class LatestworkComponent implements OnInit {
  constructor() {}
  appConfig: any;
  ngOnInit(): void {
    this.appConfig = appConfig;
  }
}
