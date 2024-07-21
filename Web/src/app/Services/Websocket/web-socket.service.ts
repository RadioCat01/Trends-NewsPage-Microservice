import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Client } from '@stomp/stompjs';
import { Article } from '../News/NewsService/news.service';
import SockJS from 'sockjs-client';


@Injectable({
  providedIn: 'root'
})
export class WebSocketService {

  private socket: WebSocket | undefined;
  private articlesSubject: Subject<Article[]> = new Subject<Article[]>();
  public articles$ = this.articlesSubject.asObservable();

  constructor() {
    this.connect();
  }

  private connect() {
    this.socket = new WebSocket('ws://localhost:8083/ws/news'); // Adjust the URL if needed

    this.socket.onopen = () => {
      console.log('WebSocket connection established');
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
