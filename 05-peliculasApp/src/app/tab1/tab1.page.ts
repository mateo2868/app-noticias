import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor(private movieSrvc: MoviesService) { }
  ngOnInit() {
    this.movieSrvc.getFeature().subscribe((res: RespuestaMDB) => {
      console.log('resp', res);
    });
  }
}
