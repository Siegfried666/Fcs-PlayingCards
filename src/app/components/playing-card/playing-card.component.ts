import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getCardsFromJson } from 'src/app/utils/helpers';
import { ApiService } from 'src/services/api.services';
import { NgOptimizedImage } from '@angular/common';
import { Card } from 'src/app/models/card';
import { forkJoin } from 'rxjs';
// import { splitStringToStringArray } from '../../utils/helpers';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
})
export class PlayingCardComponent {
  public cards: Card[] = [];
  // public splitStringToStringArray = splitStringToStringArray;

  private dataSourcePath: string = './assets/datasources/PokemonGen9.json';

  constructor(private apiService: ApiService) {
    getCardsFromJson(this.apiService, this.dataSourcePath).subscribe(
      (data: any) => {
        data.forEach((c: any) => {
          let card = new Card();

          card.abilities = c.abilities;
          card.types = c.types;
          card.id = c.id;
          card.no = c.no;
          card.picSmall = c.picSmall;
          card.picLarge = c.picLarge;
          card.name = c.name;
          card.hp = c.hp;
          card.att = c.att;
          card.def = c.def;
          card.sAtt = c.sAtt;
          card.sDef = c.sDef;
          card.spd = c.spd;
          card.description = c.description;
          
          this.cards.push(card);
        });
      }
    );
  }
}
