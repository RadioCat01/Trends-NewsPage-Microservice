import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Article } from '../News/NewsService/news.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HsitoryService {

  private apiUrl = 'http://localhost:8081/news/kafka';

  private apiUrlHistoryTrigger = "http://localhost:8081/history/get";

  constructor(private http: HttpClient) { }

  sendNews(article: Article): Observable<string> {
    return this.http.post<string>(this.apiUrl, article);
  }

 
  triggerHistory(): Observable<void> {
    return this.http.get<void>(this.apiUrlHistoryTrigger);
  }


}
