import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayingCardComponent } from './components/playing-card/playing-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CardListComponent } from './components/card-list/card-list.component';
import { StatsTableComponent } from './components/stats-table/stats-table.component';
import { MainBoardComponent } from './components/main-board/main-board.component';
import { TypesAndMovesChartComponent } from './components/types-and-moves-chart/types-and-moves-chart.component';

@NgModule({
  declarations: [AppComponent, MainBoardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PlayingCardComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    CardListComponent,
    StatsTableComponent,
    TypesAndMovesChartComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
