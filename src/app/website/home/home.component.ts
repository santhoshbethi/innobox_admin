import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as $ from 'jquery';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';
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
    // $(document).ready(function () {
    //   var $slides = document.querySelectorAll('.slide');
    //   var $controls = document.querySelectorAll('.slider__control');
    //   var numOfSlides = $slides.length;
    //   var slidingAT = 1300; // sync this with scss variable
    //   var slidingBlocked = false;

    //   [].slice.call($slides).forEach(function ($el: any, index) {
    //     var i = index + 1;
    //     $el.classList.add('slide-' + i);
    //     $el.dataset.slide = i;
    //   });

    //   [].slice.call($controls).forEach(function ($el: any) {
    //     $el.addEventListener('click', controlClickHandler);
    //   });

    //   function controlClickHandler(this: any) {
    //     if (slidingBlocked) return;
    //     slidingBlocked = true;
    //     var $control = this;
    //     var isRight = $control.classList.contains('m--right');
    //     // var $curActive = document.querySelector('.slide.s--active');
    //     var $curActive = document.querySelector('.slide.s--active');
    //     var index = +$curActive?.dataset.slide;
    //     isRight ? index++ : index--;
    //     if (index < 1) index = numOfSlides;
    //     if (index > numOfSlides) index = 1;
    //     var $newActive = document.querySelector('.slide-' + index);

    //     $control.classList.add('a--rotation');
    //     $curActive?.classList.remove('s--active', 's--active-prev');
    //     document.querySelector('.slide.s--prev')?.classList.remove('s--prev');

    //     $newActive?.classList.add('s--active');
    //     if (!isRight) $newActive?.classList.add('s--active-prev');

    //     var prevIndex = index - 1;
    //     if (prevIndex < 1) prevIndex = numOfSlides;

    //     document.querySelector('.slide-' + prevIndex)?.classList.add('s--prev');

    //     setTimeout(function () {
    //       $control.classList.remove('a--rotation');
    //       slidingBlocked = false;
    //     }, slidingAT * 0.75);
    //   }
    // });
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
}
