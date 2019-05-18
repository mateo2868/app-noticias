import { Component, OnInit } from '@angular/core';
// import * as moment from 'moment';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {
  fechaNaci: Date = new Date();
  customPickerOptions;
  custiomDate;
  // myDate = '';
  // date: string = new Date().toISOString();
  constructor(
    // private moment: Moment
  ) {
    // const now = moment();
    // console.log(moment(now.format()).format());
  }

  ngOnInit() {
    this.customPickerOptions = {
      buttons: [{
        text: 'Save',
        handler: (event) => {
          console.log('Clicked Save!');
          console.log(event);
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    };
  }
  cambioFecha(event) {
    console.log(event);
  }
}
