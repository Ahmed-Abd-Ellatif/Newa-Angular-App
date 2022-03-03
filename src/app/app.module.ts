import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheaddingComponent } from './components/topheadding/topheadding.component';
import { HttpClientModule } from '@angular/common/http';
import{NewsapiService} from './services/newsapi.service';
import { TechnewsComponent } from './components/technews/technews.component';
import { BusinessnewsComponent } from './components/businessnews/businessnews.component'
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
@NgModule({
  declarations: [
    AppComponent,
    TopheaddingComponent,
    TechnewsComponent,
    BusinessnewsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule


  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
