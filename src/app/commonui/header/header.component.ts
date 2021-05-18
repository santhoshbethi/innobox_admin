import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import appConfig from '../../config/appConfig';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent implements OnInit {
  appConfig: any;
  constructor(public api: ApiService, public router: Router) {}

  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getAllMenu();
  }

  getAllMenu() {
    this.api.getMenu().subscribe((response) => {
      console.log(response);
    });
  }
  redirect(path: any) {
    console.log(path);

    this.router.navigate([path]);
  }
}
