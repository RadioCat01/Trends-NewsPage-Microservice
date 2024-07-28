import { Component, EventEmitter, Output } from '@angular/core';
import { Article, NewsService } from '../../Services/News/NewsService/news.service';
import { SharedService } from '../../Services/SharedService/shared.service';
import {Subscription} from "rxjs";
import {KeycloakService} from "../../Services/Keycloak/keycloak.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']  // Correct property name
})
export class NavComponent {

  keyword: string = '';
  articles: Article[] = []; // Ensure you have the Article type defined
  private scrollSubscription: Subscription | undefined;
  activeFragment: string | undefined;

  constructor(
    private newsService: NewsService,
    private sharedNewsService: SharedService,
    private kcs: KeycloakService,
  ) {}

  ngOnInit(): void {
    this.scrollSubscription = this.sharedNewsService.onScroll().subscribe(fragment => {
      console.log('Detected fragment:', fragment); // Debugging log
      this.activeFragment = fragment;
    });
  }

  @Output() searchButtonClick = new EventEmitter<void>();

  searchNews(): void {
    this.searchButtonClick.emit();
    if (this.keyword) {
      this.sharedNewsService.updateKeyword(this.keyword);
      this.newsService.getSearch(5, this.keyword).subscribe(data => {
        this.sharedNewsService.updateArticles(data);
      });
    }
  }

  onLogout():void{
    this.kcs.logout();
  }

  protected readonly localStorage = localStorage;
}
