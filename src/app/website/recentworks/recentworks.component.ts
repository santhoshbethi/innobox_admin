import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import appConfig from 'src/app/config/appConfig';
import {Title} from "@angular/platform-browser";
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-recentworks',
  templateUrl: './recentworks.component.html',
})
export class RecentworksComponent implements OnInit {
  constructor(private api: ApiService, private titleService:Title) {
    this.titleService.setTitle("Innobox: Latest Work of Innobox");
  }
  appConfig: any;
  categories: any;
  catData: any;
  image:any;
  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getCategory();
    this.getAllCatData();
    this.getImages();
  }
  getAllCatData() {
    let cat_data: any = [];
    this.api.getRecentWorkCatData().subscribe((res: any) => {
      res.message.forEach((element: any, key: any) => {
        cat_data.push({
          ID: element.ID,
          cat_id: element.cat_id,
          title: element.title,
          image: this.appConfig.imageUrl + element.image1,
        });
      });
      this.catData = cat_data;
      console.log(this.catData);
    });
  }
  changeType(type: any, id: any) {
    if ($('.recentfilter-but').hasClass('active')) {
      $('.recentfilter-but').removeClass('active');
    }
    $(`#${type}`).toggleClass('active');
    let cat_data: any = [];
    if (id !== 0) {
      this.api.getRecentWorkCatData().subscribe((res: any) => {
        res.message.forEach((element: any, key: any) => {
          if (element.cat_id === id) {
            cat_data.push({
              ID: element.ID,
              cat_id: element.cat_id,
              title: element.title,
              image: this.appConfig.imageUrl + element.image1,
            });
          }
        });
        this.catData = cat_data;
      });
    } else {
      this.api.getRecentWorkCatData().subscribe((res: any) => {
        res.message.forEach((element: any, key: any) => {
          cat_data.push({
            ID: element.ID,
            cat_id: element.cat_id,
            title: element.title,
            image: this.appConfig.imageUrl + element.image1,
          });
        });
        this.catData = cat_data;
      });
    }
  }
  getCategory() {
    this.api.getRecentWorkCat().subscribe((res: any) => {
      this.categories = res.message;
    });
  }
  getImages()
  {
    
      this.api.getTopimg().subscribe((res: any) => {
     
          this.image = res.message;
       
        console.log(this.image);
      });
  }
}
