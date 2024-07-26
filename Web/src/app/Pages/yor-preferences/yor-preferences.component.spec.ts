import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YorPreferencesComponent } from './yor-preferences.component';

describe('YorPreferencesComponent', () => {
  let component: YorPreferencesComponent;
  let fixture: ComponentFixture<YorPreferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [YorPreferencesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(YorPreferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
