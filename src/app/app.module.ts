import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import {RoversModule} from './rovers/rovers.module';
import {RoversService} from './core/services/rovers.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    RoversModule,
    HttpClientModule,
    // App Routing module toujours en dernier - l'ordre compte.
    AppRoutingModule
  ],
  providers: [
    // {provide: RoversService, useClass: RoversService}
    RoversService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
