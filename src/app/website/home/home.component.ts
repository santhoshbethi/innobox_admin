import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/appConfig';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {
  constructor() {}
  appConfig: any;
  ngOnInit(): void {
    this.appConfig = appConfig;
    // $(document).ready(function () {
    //   // logo slider - start
    //   $('#logoParade').smoothDivScroll({
    //     autoScrollingMode: 'always',
    //     autoScrollingDirection: 'endlessLoopRight',
    //     autoScrollingStep: 1,
    //     autoScrollingInterval: 25,
    //   });
    //   // Logo parade event handlers
    //   $('#logoParade')
    //     .bind('mouseover', function () {
    //       $(this).smoothDivScroll('stopAutoScrolling');
    //     })
    //     .bind('mouseout', function () {
    //       $(this).smoothDivScroll('startAutoScrolling');
    //     });
    // });
  }
  changeType(type: any) {
    if ($('.recentfilter-but').hasClass('active')) {
      $('.recentfilter-but').removeClass('active');
    }
    $(`#${type}`).toggleClass('active');
  }
}
