import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { IStat } from 'src/app/models/interfaces/IStat';
import { Stat } from 'src/app/models/Stat';
import { getListOfType } from 'src/app/utils/helpers';
import { ApiService } from 'src/services/api.services';

@Component({
  selector: 'app-stats-table',
  styleUrls: ['stats-table.component.scss'],
  templateUrl: 'stats-table.component.html',
  standalone: true,
  imports: [MatTableModule, CommonModule, MatProgressBarModule],
})
export class StatsTableComponent {
  public stats: Stat[] = [];

  private path: string = './assets/datasources/Stats.json';

  constructor(private apiService: ApiService) {
    this.fetchData();
  }

  fetchData() {
    getListOfType<IStat>(this.apiService, this.path).subscribe(
      (data: any) => {
        data.forEach((sData: any) => {
          this.stats = sData;
          // console.log(this.stats);
        });
      }
    );
  }

  displayedColumns: string[] = ['statName', 'value'];
  public orderByKey(a: { key: any }) {
    return a.key;
  }

  public isNumber(a: any): boolean {
    return typeof a == 'number';
  }

  public isString(a: any): boolean {
    return typeof a == 'string';
  }
}
