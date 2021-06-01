import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-askforqoute',
  templateUrl: './askforqoute.component.html',
  styleUrls: ['./askforqoute.component.scss'],
})
export class AskforqouteComponent implements OnInit {
  contactForm: FormGroup;
  constructor(
    private _fb: FormBuilder,
    private api: ApiService,
    private _snackBar: MatSnackBar
  ) {
    this.contactForm = this._fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      company: ['', Validators.required],
      phone: ['', Validators.required],
      message: ['', Validators.required],
      messagecat: ['', Validators.required],
    });
  }

  ngOnInit(): void {}
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
}
