import {Component, Input} from '@angular/core';
import {Article} from "../../Services/News/NewsService/news.service";
import {HsitoryService} from "../../Services/HistoryService/hsitory.service";

@Component({
  selector: 'app-wesocket4x4news',
  templateUrl: './wesocket4x4news.component.html',
  styleUrl: './wesocket4x4news.component.scss'
})
export class Wesocket4x4newsComponent {

  @Input() article!: Article;


  constructor(private historyService:HsitoryService) { }

  onCardClick() {
    this.historyService.sendNews(this.article).subscribe(
      response => {
        console.log(response); // "Message Sent !"
      },
      error => {
        console.error('Error:', error);
      }
    );
  }

}
