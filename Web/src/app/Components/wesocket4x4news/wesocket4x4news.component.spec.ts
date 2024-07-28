import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wesocket4x4newsComponent } from './wesocket4x4news.component';

describe('Wesocket4x4newsComponent', () => {
  let component: Wesocket4x4newsComponent;
  let fixture: ComponentFixture<Wesocket4x4newsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Wesocket4x4newsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Wesocket4x4newsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
