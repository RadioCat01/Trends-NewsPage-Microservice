import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './Pages/landing/landing.component';
import { authGuard } from './Services/Guard/auth.guard';
import { NewsPageComponent } from './Components/news-page/news-page.component';
import { WebsocketPageComponent } from './Pages/websocket-page/websocket-page.component';

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
    path: "websocket",
    component: WebsocketPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
