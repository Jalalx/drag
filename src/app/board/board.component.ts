import { Component, OnInit } from '@angular/core';
import { CardSchema } from '../cardSchema';
import { CardStore } from '../cardStore';
import { ListSchema } from '../listSchema';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  cardStore: CardStore;
  lists: ListSchema[];

  constructor() { }

  makeMockData() {
    
    this.cardStore = new CardStore();
    
    const lists: ListSchema[] = [
      {
        name: 'To Do',
        cards: []
      },
      {
        name: 'Doing',
        cards: []
      },
      {
        name: 'Done',
        cards: []
      }
    ];

    this.lists = lists;
  }

  ngOnInit() {
    this.makeMockData();
  }

}
