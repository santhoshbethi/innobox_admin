import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';
import SwiperCore, {
  A11y,
  Autoplay,
  Controller,
  EffectFlip,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from 'swiper/core';
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  EffectFlip,
  Thumbs,
  Controller,
]);
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  homeForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private api: ApiService
  ) {
    this.homeForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
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
  addData() {
    if (this.homeForm.valid) {
      this.api.addHomeContact(this.homeForm.value).subscribe((res: any) => {
        let data = {
          message: res.message,
          action: 'X',
          class: 'green-snackbar',
        };
        this.openSnackbar(data);
        this.homeForm.reset();
      });
    } else {
      let data = {
        message: 'Please Fill required Fields',
        action: 'X',
        class: 'red-snackbar',
      };
      this.openSnackbar(data);
    }
  }
  openSnackbar(data: any) {
    this._snackBar.open(data.message, data.action, {
      duration: 5000,
      panelClass: [data.class],
    });
  }
  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
}
