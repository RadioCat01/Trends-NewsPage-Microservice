import { Component, Input } from '@angular/core';
import { Article, NewsService } from '../../Services/News/NewsService/news.service';
import { HsitoryService } from '../../Services/HistoryService/hsitory.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {

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
