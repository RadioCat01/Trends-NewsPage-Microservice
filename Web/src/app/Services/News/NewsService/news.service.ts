import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ReactiveFormsModule } from '@angular/forms';

export interface Article {
  source: {
    id: string;
    name: string;
  };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private apiUrl = 'http://localhost:8081/news';

  constructor(private http: HttpClient) {}

  getNews(pageSize: number = 5): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}?pageSize=${pageSize}`);
  }

  getSearch(pageSize: number = 5, keyword: string): Observable<Article[]> {
    return this.http.get<Article[]>(`${this.apiUrl}/search?pageSize=${pageSize}&keyword=${keyword}`);
  }

}
