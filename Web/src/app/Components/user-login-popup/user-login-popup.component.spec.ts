import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLoginPopupComponent } from './user-login-popup.component';

describe('UserLoginPopupComponent', () => {
  let component: UserLoginPopupComponent;
  let fixture: ComponentFixture<UserLoginPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLoginPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserLoginPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
