import { Component, Input } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { HsitoryService } from '../../Services/HistoryService/hsitory.service';

@Component({
  selector: 'app-websocket-news-card',
  templateUrl: './websocket-news-card.component.html',
  styleUrl: './websocket-news-card.component.scss',
 animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-in', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms ease-out', style({ transform: 'translateX(100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class WebsocketNewsCardComponent {

  @Input() article!: Article;

  
  constructor(private historyService:HsitoryService) { }

  onCardClick() {
    this.historyService.sendNews(this.article).subscribe(
      response => {
        console.log(response); // "Message Sent !"
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}
