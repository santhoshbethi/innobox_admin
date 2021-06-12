import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import appConfig from '../../config/appConfig';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  appConfigs: any =[];
  appConfig:any;
  objectKeys = Object.keys;

  constructor(public api: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getAllMenu();
  }

  getAllMenu() {
    this.api.getMenu().subscribe((response) => {
      console.log(response);
      this.appConfigs= response;
      console.log(this.appConfigs);
    });
  }
  redirect(path: any) {
    console.log(path);

    this.router.navigate([path]);
  }
}
