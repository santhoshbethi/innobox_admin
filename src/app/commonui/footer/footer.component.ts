import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import appConfig from '../../config/appConfig';
declare const navbarfun:any;

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
})
export class FooterComponent implements OnInit {
  appConfigs: any =[];
  appConfig:any;
  social:any;
  objectKeys = Object.keys;

  constructor(public api: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getAllMenu();
   
  }

  getAllMenu() {
    this.api.getsocial().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      if (res.message) {
        console.log(response);
        this.social = res.message;
        console.log(this.social);
      } else {
      }
  
    });
  }}