import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Article } from '../News/NewsService/news.service';

@Injectable({
  providedIn: 'root'
})
export class HistoryWebsocketService {
  private socket: WebSocket | undefined;
  private articlesSubject: Subject<Article[]> = new Subject<Article[]>();
  public articles$ = this.articlesSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket('ws://localhost:8085/ws/history'); // Adjust the URL if needed

    this.socket.onopen = () => {
      console.log('WebSocket two connection established');
    };

    this.socket.onmessage = (event) => {
      const articles: Article[] = JSON.parse(event.data);
      this.articlesSubject.next(articles); // Emit the new articles to subscribers
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket connection closed', event);
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error', error);
    };
  }

  ngOnDestroy() {
    this.socket?.close();
  }
}
