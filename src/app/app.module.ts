import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListComponent } from './components/card-list/card-list.component';
import { StatsBoardComponent } from './components/stats-board/stats-board.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayingCardComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    CardListComponent,
    StatsBoardComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
