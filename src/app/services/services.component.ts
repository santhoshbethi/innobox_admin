import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from './api.service';
declare const test: any;

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  id: any;
  res: any;
  highlightValues:any;

  constructor(
    private route: ActivatedRoute,
    public api: ApiService,
  ) { }

  ngOnInit(): void {
    
    this.id = this.route.snapshot.params['id'];
    this.getHighlights(this.id);

    this.api.getServiceById(this.id).subscribe((response: any) => {
      this.res = response.message[0].maindata;
      console.log(this.res);
     }, error => {
       console.log("error");
     });
   
     
  }

  getHighlights(id: number){
    const formatData = this.formatData(this.id);
    this.api.getServiceHighlightById({"id":this.id}).subscribe((response: any) => {
      this.highlightValues = response.message;
      console.log(this.res);
     }, error => {
       console.log("error");
     });
  }

  formatData(id:any) {
    return {
      id: id,
    };
  }
}
