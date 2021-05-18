import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
})
export class AiComponent implements OnInit {
  appConfig: any;
  constructor() {}

  ngOnInit(): void {
    this.appConfig = appConfig;
  }
}
