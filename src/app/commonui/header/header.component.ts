import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import appConfig from '../../config/appConfig';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  appConfig: any;
  constructor(public api: ApiService) {}

  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getAllMenu();
  }

  getAllMenu() {
    this.api.getMenu().subscribe((response) => {
      console.log(response);
    });
  }
}
