import { Component } from '@angular/core';
import { Article, NewsService } from '../../Services/News/NewsService/news.service';
import { SharedService } from '../../Services/SharedService/shared.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  keyword: string = '';
  articles: Article[] = []; // Ensure you have the Article type defined

  constructor(
    private newsService: NewsService,
    private sharedNewsService: SharedService
  ) {}


  searchNews(): void {
    if (this.keyword) {
      this.sharedNewsService.updateKeyword(this.keyword);
      this.newsService.getSearch(5, this.keyword).subscribe(data => {
        this.sharedNewsService.updateArticles(data);
      });
    }
  }

  home(): void {
    this.sharedNewsService.triggerLoadArticles();
  }

}
