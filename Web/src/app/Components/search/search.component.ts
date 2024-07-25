import { Component, EventEmitter, Output } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';
import { MatDialog } from '@angular/material/dialog';
import { SharedService } from '../../Services/SharedService/shared.service';
import { NewsPageComponent } from '../news-page/news-page.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss'
})
export class SearchComponent {
  articles: Article[] = [];

  constructor(
    public dialog: MatDialog,
    private sharedService: SharedService 
  ){}

  ngOnInit(): void {
    this.sharedService.articles$.subscribe(articles => {
      this.articles = articles;
    });
  }

  openNewsDialog(article: Article): void {
    this.dialog.open(NewsPageComponent, {
      data: { article: article },
      enterAnimationDuration:200,
      exitAnimationDuration:200
    });
  }

  @Output() closebuttonClick = new EventEmitter<void>();

  close(){
    this.closebuttonClick.emit();
  }


}
