import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  appConfig: any;
  constructor() {}

  ngOnInit(): void {
    this.appConfig = appConfig;
  }
}
