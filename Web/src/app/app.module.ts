import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './Pages/landing/landing.component';
import { KeycloakService } from './Services/Keycloak/keycloak.service';
import { HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { HttpTokenInterceptor } from './Services/interceptor/http-token.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { UserLoginPopupComponent } from './Components/user-login-popup/user-login-popup.component';
import { MatDialogModule } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NewsCardComponent } from './Components/news-card/news-card.component';
import { CommonModule } from '@angular/common';
import { NavComponent } from './Components/nav/nav.component';
import { NewsPageComponent } from './Components/news-page/news-page.component';
import { WebsocketPageComponent } from './Pages/websocket-page/websocket-page.component';
import { WebsocketNewsCardComponent } from './Components/websocket-news-card/websocket-news-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HistoryComponent } from './Pages/history/history.component';
import { HistoryNewsCardComponent } from './Components/history-news-card/history-news-card.component';
import { SearchComponent } from './Components/search/search.component';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule, MatPrefix} from "@angular/material/form-field";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {YorPreferencesComponent} from "./Pages/yor-preferences/yor-preferences.component";

export function kcFactory(kcService: KeycloakService){
  return () =>kcService.init();
}


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    UserLoginPopupComponent,
    NewsCardComponent,
    NavComponent,
    NewsPageComponent,
    WebsocketPageComponent,
    WebsocketNewsCardComponent,
    HistoryComponent,
    HistoryNewsCardComponent,
    SearchComponent,
    YorPreferencesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [
    HttpClient,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpTokenInterceptor,
      multi: true
    },
     {
      provide: APP_INITIALIZER,
      deps: [KeycloakService],
      useFactory: kcFactory,
      multi: true
     },
     provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
