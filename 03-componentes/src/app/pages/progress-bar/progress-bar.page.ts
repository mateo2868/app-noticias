import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.page.html',
  styleUrls: ['./progress-bar.page.scss'],
})
export class ProgressBarPage implements OnInit {
  porcentaje = 0.05;
  constructor() { }

  ngOnInit() {
  }
  cambioRango(event) {
    // let result = event.detail.value;
    // console.log(event.detail.value);
    this.porcentaje = event.detail.value / 100;
    // console.log(this.porcentaje);
  }

}
