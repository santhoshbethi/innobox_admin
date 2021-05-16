import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
})
export class CareerComponent implements OnInit {
  constructor(public api: ApiService) {}
  careers: any;
  careerbyid: any;
  appConfig: any;
  ngOnInit(): void {
    this.getCareer();
    this.appConfig = appConfig;
  }
  getCareer() {
    this.api.getCareer().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res.message);
      if (res.message) {
        this.careers = res.message;
      } else {
        console.log('res', res);
      }
    });
  }

  getCareerById(id: any) {
    this.api.getCareerById(id).subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res.message);
      if (res.message) {
        this.careerbyid = res.message;
      } else {
        console.log('res', res);
      }
    });
  }
}
