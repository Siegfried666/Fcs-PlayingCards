import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { IStat } from 'src/app/models/interfaces/IStat';
import { Stat } from 'src/app/models/Stat';
import { getListOfType } from 'src/app/utils/helpers';
import { ApiService } from 'src/services/api.services';

@Component({
  selector: 'app-stats-board',
  styleUrls: ['stats-board.component.scss'],
  templateUrl: 'stats-board.component.html',
  standalone: true,
  imports: [MatTableModule, CommonModule],
})
export class StatsBoardComponent {
  public stats: Stat[] = [];

  private statsPath: string = './assets/datasources/Stats.json';

  constructor(private apiService: ApiService) {
    this.getPokemonStats();
  }

  getPokemonStats() {
    getListOfType<IStat>(this.apiService, this.statsPath).subscribe(
      (data: any) => {
        data.forEach((sData: any) => {
          this.stats = sData;
          console.log(this.stats);
        });
      }
    );
  }

  displayedColumns: string[] = ['statName', 'value'];
  public orderByKey(a: { key: any }) {
    return a.key;
  }
}
