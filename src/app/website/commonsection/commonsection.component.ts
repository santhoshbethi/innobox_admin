import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';

@Component({
  selector: 'app-commonsection',
  templateUrl: './commonsection.component.html',
})
export class CommonsectionComponent implements OnInit {
  constructor() {}
  appConfig: any;

  ngOnInit(): void {
    this.appConfig = appConfig;
  }
}
