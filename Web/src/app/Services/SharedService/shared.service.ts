import {Injectable, NgZone} from '@angular/core';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { Article } from '../News/NewsService/news.service';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private router: Router, private ngZone: NgZone) {}



  onScroll(): Observable<string> {
    return new Observable((observer) => {
      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('scroll', () => {
          const currentFragment = this.getCurrentFragment();
          this.ngZone.run(() => observer.next(currentFragment));
        });
      });
    });
  }

  private getCurrentFragment(): string {
    const sections = document.querySelectorAll('div[id]');
    let currentFragment = '';
    const viewportTop = window.scrollY;
    const viewportBottom = viewportTop + window.innerHeight;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const sectionTop = rect.top + viewportTop; // Absolute position from top of the document
      const sectionBottom = sectionTop + rect.height; // Bottom position of the section

      console.log(`Checking section: ${section.id}`);
      console.log(`Section Top: ${sectionTop}, Section Bottom: ${sectionBottom}`);
      console.log(`Viewport Top: ${viewportTop}, Viewport Bottom: ${viewportBottom}`);

      // Check if the section is within the viewport boundaries
      if (sectionTop < viewportBottom && sectionBottom > viewportTop) {
        console.log(`Section ${section.id} is in view`);
        currentFragment = section.id;
      }
    });

    console.log('Current fragment:', currentFragment);
    return currentFragment;
  }









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
