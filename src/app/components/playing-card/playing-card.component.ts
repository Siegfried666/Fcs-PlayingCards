import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getCardsFromJson } from 'src/app/utils/helpers';
import { ApiService } from 'src/services/api.services';
import { NgOptimizedImage } from '@angular/common';
import { Card } from 'src/app/models/Card';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
})
export class PlayingCardComponent {
  public cards: Card[] = [];

  private dataSourcePath: string = './assets/datasources/Pokemons.json';

  constructor(private apiService: ApiService) {
    getCardsFromJson(this.apiService, this.dataSourcePath).subscribe(
      (data: any) => {
        data.forEach((c: any) => {
          let card = new Card();

          card.abilities = c.abilities;
          card.types = c.types;
          card.id = c.id;
          // card.card = c.card;
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
          card.descriptionViolet = c.descriptionViolet;
          card.descriptionScarlet = c.descriptionScarlet;

          this.cards.push(card);
        });
      }
    );
  }
}
