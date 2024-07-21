import { Component } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';
import { WebSocketService } from '../../Services/Websocket/web-socket.service';

@Component({
  selector: 'app-websocket-page',
  templateUrl: './websocket-page.component.html',
  styleUrl: './websocket-page.component.scss'
})
export class WebsocketPageComponent {
  articles: Article[] = [];

  constructor(private webSocketService: WebSocketService) {}

  ngOnInit(): void {
    this.webSocketService.articles$.subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }
}
