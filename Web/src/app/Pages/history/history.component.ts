import { Component } from '@angular/core';
import { Article } from '../../Services/News/NewsService/news.service';
import { WebSocketService } from '../../Services/Websocket/web-socket.service';
import { HistoryWebsocketService } from '../../Services/HistoryWebSocket/history-websocket.service';
import { HsitoryService } from '../../Services/HistoryService/hsitory.service';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { NewsPageComponent } from '../../Components/news-page/news-page.component';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrl: './history.component.scss'
})
export class HistoryComponent {
  private articlesSubscription: Subscription | undefined;
  articles: Article[] = [];

  constructor(
    private historyWebsocket: HistoryWebsocketService,
    private historyService: HsitoryService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.onTriggerHistory();
    this.articlesSubscription = this.historyWebsocket.articles$.subscribe(
      (articles) => {
        this.articles = articles;
        console.log('Received articles:', articles);
      },
      (error) => {
        console.error('Error receiving articles:', error);
      }
    );
  }
  onTriggerHistory() {
    this.historyService.triggerHistory().subscribe(
      () => {
        console.log('History triggered successfully');
      },
      (error) => {
        console.error('Error triggering history:', error);
      }
    );
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
