import { Component, Input } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrl: './news-card.component.scss'
})
export class NewsCardComponent {

  @Input() article!: Article;
  @Input() cardClass!: string;

}
