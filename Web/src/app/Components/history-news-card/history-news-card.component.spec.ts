import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryNewsCardComponent } from './history-news-card.component';

describe('HistoryNewsCardComponent', () => {
  let component: HistoryNewsCardComponent;
  let fixture: ComponentFixture<HistoryNewsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HistoryNewsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoryNewsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
