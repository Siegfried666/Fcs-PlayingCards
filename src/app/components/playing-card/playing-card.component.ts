import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { getCardsFromJson } from 'src/app/utils/helpers';
import { ApiService } from 'src/services/api.services';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class PlayingCardComponent {
  public cards: any[] = [];

  private dataSourcePath: string = './assets/datasources/PokemonGen9.json';

  constructor(private apiService: ApiService) {
    getCardsFromJson(this.apiService, this.dataSourcePath).subscribe((data) => {
      this.cards = data;
    });
  }
}
