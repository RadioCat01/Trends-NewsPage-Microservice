import { Component, Input } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';

@Component({
  selector: 'app-history-news-card',
  templateUrl: './history-news-card.component.html',
  styleUrl: './history-news-card.component.scss'
})
export class HistoryNewsCardComponent {

  @Input() article!: Article;

}
