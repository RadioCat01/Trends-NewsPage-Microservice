import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebsocketNewsCardComponent } from './websocket-news-card.component';

describe('WebsocketNewsCardComponent', () => {
  let component: WebsocketNewsCardComponent;
  let fixture: ComponentFixture<WebsocketNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WebsocketNewsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebsocketNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
