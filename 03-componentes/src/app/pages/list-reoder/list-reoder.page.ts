import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-reoder',
  templateUrl: './list-reoder.page.html',
  styleUrls: ['./list-reoder.page.scss'],
})
export class ListReoderPage implements OnInit {
  personajes = ['Aquaman', 'Superman ', 'Batman', 'Flash', 'Mujer maravilla'];
  constructor() { }

  ngOnInit() {
  }
  reorder(event) {
    console.log(event);
    const itemMover = this.personajes.splice(event.detail.from, 1)[0];
    this.personajes.splice(event.detail.to, 0, itemMover);
    event.detail.complete();
  }
  onClick() {
    console.log(this.personajes);
  }

}
