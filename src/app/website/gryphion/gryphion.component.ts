import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-gryphion',
  templateUrl: './gryphion.component.html',
})
export class GryphionComponent implements OnInit {
  paramID: any;
  singleData: any;
  appConfig: any;
  tesimonials:any;
  constructor(private api: ApiService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramID = this.route.snapshot.paramMap.get('id');
    this.getSingleData();
    this.appConfig = appConfig;
    this.getTestimonials();
    
  }
  getSingleData() {
    this.api.getRecentWorkSingleCatData(this.paramID).subscribe((res: any) => {
      console.log(res);

      this.singleData = res.message[0];
    });
  }
  getTestimonials() {
    this.api.getTestimonials().subscribe((res: any) => {
      this.tesimonials = res.message;
    });
  }
}
