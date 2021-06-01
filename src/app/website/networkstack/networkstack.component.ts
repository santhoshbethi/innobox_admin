import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-networkstack',
  templateUrl: './networkstack.component.html',
})
export class NetworkstackComponent implements OnInit {
  paramID: any;
  serviceData: any;
  highlights: any;
  constructor(private api: ApiService, private router: ActivatedRoute) {}

  ngOnInit(): void {
    this.paramID = this.router.snapshot.paramMap.get('id');
    this.getSingleService();
  }
  getSingleService() {
    this.api.getServiceById(this.paramID).subscribe((res: any) => {
      this.serviceData = res.message[0].maindata[0];
      this.highlights = res.message[0].hiighlights;
    });
  }
}
