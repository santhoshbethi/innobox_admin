import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';

@Component({
  selector: 'app-successstories',
  templateUrl: './successstories.component.html',
  styleUrls: ['./successstories.component.scss'],
})
export class SuccessstoriesComponent implements OnInit {
  constructor() {}
  appConfig: any;
  ngOnInit(): void {
    this.appConfig = appConfig;
  }
}
