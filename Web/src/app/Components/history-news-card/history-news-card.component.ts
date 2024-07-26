import { Component, Input } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';
import {HsitoryService} from "../../Services/HistoryService/hsitory.service";

@Component({
  selector: 'app-history-news-card',
  templateUrl: './history-news-card.component.html',
  styleUrl: './history-news-card.component.scss'
})
export class HistoryNewsCardComponent {

  @Input() article!: Article;
  @Input() cardClass!: string;

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
