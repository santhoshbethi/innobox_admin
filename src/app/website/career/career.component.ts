import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import appConfig from 'src/app/config/appConfig';
import { ApiService } from 'src/app/services/api.service';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
})
export class CareerComponent implements OnInit {
  applynowForm: FormGroup;
  display='none';
  image:any;
  applynow1Form: FormGroup;
  title: any;
  constructor(
    private _fb: FormBuilder,
    private api: ApiService,
    private _snackBar: MatSnackBar,
    private titleService:Title
  ) {
    this.titleService.setTitle("Innobox: Career");
    this.applynowForm = this._fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      previousCompany: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      applyingFor: ['', Validators.required],
      file: ['', Validators.required],
    });
    this.applynow1Form = this._fb.group({
      fullname: ['', Validators.required],
      email: ['', Validators.required],
      previousCompany: ['', Validators.required],
      mobile: ['', [Validators.required,Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      applyingFor: ['', Validators.required],
      file: ['', Validators.required],
      message: [' ', Validators.required],
    });
  }

  careers: any;
  careerbyid: any;
  appConfig: any;
  emptlk:any;
  ngOnInit(): void {
    this.getCareer();
    this.appConfig = appConfig;
    this.getAllemptlk();
    this.getImages();
  }
  getCareer() {
    this.api.getCareer().subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      if (res.message) {
        this.careers = res.message;
      } else {
      }
    });
  }

  getCareerById(id: any, title: any) {
    this.title = title;
    this.applynow1Form.get('applyingFor')?.setValue(title);
    this.api.getCareerById(id).subscribe((response) => {
      let res = JSON.parse(JSON.stringify(response));
      console.log(res);
      if (res.message) {
        this.careerbyid = res.message;
      } else {
      }
    });
  }
  fileChange(event: any) {
    this.applynowForm.get('file')?.setValue(event.target.files[0]);
  }
  file1Change(event: any) {
    this.applynow1Form.get('file')?.setValue(event.target.files[0]);
  }
  addData() {
    let _form = new FormData();
    for (const [key, val] of Object.entries(this.applynowForm.value)) {
      if (key === 'file') {
        _form.append(key, this.applynowForm.get(key)?.value);
      } else {
        _form.append(key, this.applynowForm.get(key)?.value);
      }
    }
    if (this.applynowForm.valid) {
      this.api.applyNow(_form).subscribe((res: any) => {
        let data = {
          message: res.message,
          action: 'X',
          class: 'green-snackbar',
        };
        this.display='block';
       
        $('#dismiss').trigger('click');
        this.applynowForm.reset();
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
  get f(){  
    return this.applynowForm.controls;  
  }  
  get f1(){  
    return this.applynow1Form.controls;  
  }  
  addApplyData() {
    console.log(this.applynow1Form.value);
    let _form = new FormData();
    for (const [key, val] of Object.entries(this.applynow1Form.value)) {
      if (key === 'file') {
        _form.append(key, this.applynow1Form.get(key)?.value);
      } else {
        _form.append(key, this.applynow1Form.get(key)?.value);
      }
    }
    if (this.applynow1Form.valid) {
      
      this.api.applyNow(_form).subscribe((res: any) => {
        let data = {
          message: res.message,
          action: 'X',
          class: 'green-snackbar',
        };
        this.display='block';
        $('#dismiss').trigger('click');
        this.applynow1Form.reset();
       
       
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
  closemodal()
  {
    this.display='none';
    
  }
  getImages()
  {
    
      this.api.getTopimg().subscribe((res: any) => {
     
          this.image = res.message;
       
        console.log(this.image);
      });
  }
  getAllemptlk() {
    this.api.getemptlk().subscribe((res: any) => {
      if (res.message) {
        this.emptlk = res.message;
     
      }
    });
  }
}
