import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Article } from '../News/NewsService/news.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
 
  private preferencesUpdatedSource = new Subject<void>();
  preferencesUpdated$ = this.preferencesUpdatedSource.asObservable();

  notifyPreferencesUpdated() {
    this.preferencesUpdatedSource.next();
  }

  private articlesSubject = new BehaviorSubject<Article[]>([]);
  articles$ = this.articlesSubject.asObservable();

  updateArticles(articles: Article[]): void {
    this.articlesSubject.next(articles);
  }

  private keywordSource = new Subject<string>();
  keyword$ = this.keywordSource.asObservable();

  updateKeyword(keyword: string): void {
    this.keywordSource.next(keyword);
  }

  private loadArticlesSource = new Subject<void>();
  loadArticles$ = this.loadArticlesSource.asObservable();

  triggerLoadArticles(): void {
    this.loadArticlesSource.next();
  }

}
