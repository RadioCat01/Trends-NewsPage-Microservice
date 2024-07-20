import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { authGuard } from './Services/Guard/auth.guard';
import { NewsPageComponent } from './Components/news-page/news-page.component';
import { FinanceComponent } from './Components/finance/finance.component';

const routes: Routes = [
  {
    path: '', redirectTo:'/landing', pathMatch:'full'
  },
  {
    path:"landing",
    component : LandingComponent,
    canActivate:[authGuard]
  },
  {
    path: "newsPage",
    component: NewsPageComponent
  },
  {
    path: "finance",
    component: FinanceComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
