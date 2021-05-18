import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import appConfig from 'src/app/config/appConfig';
@Component({
  selector: 'app-recentworks',
  templateUrl: './recentworks.component.html',
})
export class RecentworksComponent implements OnInit {
  constructor() {}
  appConfig: any;
  ngOnInit(): void {
    this.appConfig = appConfig;
  }
  changeType(type: any) {
    if ($('.recentfilter-but').hasClass('active')) {
      $('.recentfilter-but').removeClass('active');
    }
    $(`#${type}`).toggleClass('active');
  }
}
