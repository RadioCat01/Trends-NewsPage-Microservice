import { TestBed } from '@angular/core/testing';

import { HistoryWebsocketService } from './history-websocket.service';

describe('HistoryWebsocketService', () => {
  let service: HistoryWebsocketService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HistoryWebsocketService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
