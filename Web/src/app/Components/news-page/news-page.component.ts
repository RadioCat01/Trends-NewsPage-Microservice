import { Component, Inject, Input } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrl: './news-page.component.scss'
})
export class NewsPageComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: { article: Article }) {}

  get article(): Article {
    return this.data.article;
  }

}
