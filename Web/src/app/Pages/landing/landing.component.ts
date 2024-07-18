import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UserLoginPopupComponent } from '../../Components/user-login-popup/user-login-popup.component';
import { CheckUSerService } from '../../Services/User/check-user.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  constructor(
    public dialog: MatDialog,
    public CheckUser: CheckUSerService,
  ){}

  ngOnInit(): void {
    this.CheckUser.checkUser().subscribe(exists => {
      console.log(exists);
      if(!exists){
        this.openDialog();
      }
    })
  }

  openDialog() {
    this.dialog.open(UserLoginPopupComponent,{
      width:'600px',
      height: '500px'
    });
  }

  
}
