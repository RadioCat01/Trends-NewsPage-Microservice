import { Component } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';
import { WebSocketService } from '../../Services/Websocket/web-socket.service';
import { MatDialog } from '@angular/material/dialog';
import { NewsPageComponent } from '../../Components/news-page/news-page.component';

@Component({
  selector: 'app-websocket-page',
  templateUrl: './websocket-page.component.html',
  styleUrl: './websocket-page.component.scss'
})
export class WebsocketPageComponent {
  articles: Article[] = [];

  constructor(
    private webSocketService: WebSocketService,
    public dialog: MatDialog,
  ) {}

  ngOnInit(): void {
    this.webSocketService.articles$.subscribe((articles: Article[]) => {
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

}
