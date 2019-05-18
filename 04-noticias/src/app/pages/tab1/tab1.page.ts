import { Component, OnInit, ViewChild } from '@angular/core';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  noticias: Article[] = [];
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  constructor(private noticiasSrv: NoticiasService) {
  }

  ngOnInit() {
    this.cargarNoticias();
  }

  loadData(event) {
    console.log(event);
    this.cargarNoticias(event);
  }

  cargarNoticias(event?) {
    this.noticiasSrv.getTopHeadLines().subscribe(resp => {
      console.log(resp);
      // this.noticias = resp.articles;
      this.noticias.push(...resp.articles);
      if (resp.articles.length === 0) {
        event.target.complete();
        this.infiniteScroll.disabled = true;
        return;
      }
      if (event) {
        event.target.complete();
      }

    });
  }
}
