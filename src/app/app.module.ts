import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayingCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
