import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import appConfig from 'src/app/config/appConfig';
import * as $ from 'jquery';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
})
export class ContactusComponent implements OnInit {
  contactForm: FormGroup;
  address: any;
  image:any;
  appConfig:any;
  constructor(
    private _fb: FormBuilder,
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) {
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      message: ['', Validators.required],
      messagecat: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.appConfig = appConfig;
    this.getAddress();
    this.getImages();
  }
  getAddress() {
    this.api.getAddress().subscribe((res: any) => {
      this.address = res.message;
    });
  }
  getImages()
  {
    
      this.api.getTopimg().subscribe((res: any) => {
     
          this.image = res.message;
       
        console.log(this.image);
      });
  }
  addData() {
    if (this.contactForm.valid) {
      this.api.addContactUs(this.contactForm.value).subscribe((res: any) => {
        let data = {
          message: res.message,
          action: 'X',
          class: 'green-snackbar',
        };
        this.openSnackbar(data);
        $('#dismiss').trigger('click');
        this.contactForm.reset();
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
  get f(){  
    return this.contactForm.controls;  
  } 
}
