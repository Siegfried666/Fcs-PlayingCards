import { Component } from '@angular/core';
import { getListOfType, stringToArrayOfType } from 'src/app/utils/helpers';
import { ApiService } from 'src/services/api.services';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { Card } from 'src/app/models/Card';
import { IPokemon } from 'src/app/models/interfaces/IPokemon';
import { IAbility } from 'src/app/models/interfaces/IAbility';
import { IMove } from 'src/app/models/interfaces/IMove';
import { IStat } from 'src/app/models/interfaces/IStat';
import { PlayingCardComponent } from "../playing-card/playing-card.component";

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.scss'],
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, PlayingCardComponent],
})
export class CardListComponent {
  public cards: Card[] = [];

  private pokemonsPath: string = './assets/datasources/Pokemons.json';
  private abilitiesPath: string = './assets/datasources/Abilities.json';
  private statsPath: string = './assets/datasources/Stats.json';
  private movesPath: string = './assets/datasources/Moves.json';

  constructor(private apiService: ApiService) {
    this.generateCards();
  }

  generateCards() {
    this.getPokemonList();
    this.getAbilityList();
    this.getMoveList();
    this.getStatList();
  }

  getPokemonList() {
    getListOfType<IPokemon>(this.apiService, this.pokemonsPath).subscribe(
      (data: any) => {
        data.forEach((pokemon: any) => {
          let card = new Card();
          card.pokemon = pokemon;
          this.cards.push(card);
        });
      }
    );
  }

  getAbilityList() {
    getListOfType<IAbility>(this.apiService, this.abilitiesPath).subscribe(
      (data: any) => {
        this.cards.forEach((card: Card) => {
          card.pokemon.abilities = stringToArrayOfType<IAbility>(
            data,
            card.pokemon.abilities
          );
        });
      }
    );
  }

  getMoveList() {
    getListOfType<IMove>(this.apiService, this.movesPath).subscribe(
      (data: any) => {
        this.cards.forEach((card: Card) => {
          card.moves = stringToArrayOfType<IMove>(data, card.pokemon.moves);
        });
      }
    );
  }

  getStatList() {
    getListOfType<IStat>(this.apiService, this.statsPath).subscribe(
      (data: any) => {
        this.cards.forEach((card: Card) => {
          card.stats = stringToArrayOfType<IStat>(data, card.pokemon.name)[0];
        });
      }
    );
  }
}
