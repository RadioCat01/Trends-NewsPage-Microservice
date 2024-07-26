import { Component } from '@angular/core';
import {Article, NewsService} from "../../Services/News/NewsService/news.service";
import {MatDialog} from "@angular/material/dialog";
import {NewsPageComponent} from "../../Components/news-page/news-page.component";
import {SharedService} from "../../Services/SharedService/shared.service";

@Component({
  selector: 'app-yor-preferences',
  templateUrl: './yor-preferences.component.html',
  styleUrl: './yor-preferences.component.scss'
})
export class YorPreferencesComponent {
  articles: Article[] = [];

  constructor(
    public dialog: MatDialog,
    private newsService: NewsService,
    private sharedService: SharedService
  ) {}

  ngOnInit(): void {
    this.sharedService.preferencesUpdated$.subscribe(() => {
      this.loadArticles();
    });
    this.sharedService.loadArticles$.subscribe(() => {
      this.loadArticles();
    });
    this.loadArticles();
  }

  loadArticles(): void {
    this.newsService.getNews().subscribe((data) => {
      this.articles = data;
    });
  }

  openNewsDialog(article: Article): void {
    this.dialog.open(NewsPageComponent, {
      data: { article: article },
      maxWidth:'none',
      width:'1200px',
      height:'1000px',
      enterAnimationDuration:200,
      exitAnimationDuration:200
    });
  }

}
