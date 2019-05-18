import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment, IonInfiniteScroll } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  @ViewChild(IonSegment) segment: IonSegment;
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;

  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];

  constructor(private noticiasSrvc: NoticiasService) { }

  ngOnInit() {
    this.segment.value = this.categorias[0];

    this.cargarNoticias(this.categorias[0]);
  }

  cambioCategoria(event) {
    this.infiniteScroll.disabled = false;
    this.noticias = [];

    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias(categoria: string, event?) {
    // this.segment.value = this.categorias[0];
    this.noticiasSrvc.getTopHeadlinesCategorias(categoria)
      .subscribe(resp => {
        console.log(resp);
        // this.infiniteScroll.disabled = false;
        this.noticias.push(...resp.articles);
        if (event) {
          event.target.complete();
        }
        if (resp.articles.length === 0) {
          this.infiniteScroll.disabled = true;
          return;
        }
      });
  }
  loadData(event) {
    console.log(this.segment.value);

    this.cargarNoticias(this.segment.value, event);
  }


}
