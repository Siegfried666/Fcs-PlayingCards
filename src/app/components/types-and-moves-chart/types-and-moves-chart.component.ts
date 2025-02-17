import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { getListOfType } from 'src/app/utils/helpers';
import { IType } from 'src/app/models/interfaces/IType';
import { ApiService } from 'src/services/api.services';

@Component({
  selector: 'app-types-and-moves-chart',
  templateUrl: './types-and-moves-chart.component.html',
  styleUrls: ['./types-and-moves-chart.component.scss'],
  standalone: true,
  imports: [MatTableModule, CommonModule],
})
export class TypesAndMovesChartComponent {
  types: IType[] = [];
  private path: string = './assets/datasources/Types.json';
  displayedColumns: string[] = [];
  circle = './assets/images/chart/circle.png';
  triangle = './assets/images/chart/triangle.png';
  cross = './assets/images/chart/cross.png';
  width = 10;
  height = 10;

  constructor(private apiService: ApiService) {
    this.fetchData();
  }

  fetchData() {
    getListOfType<IType>(this.apiService, this.path).subscribe((data: any) => {
      this.types = data;
      this.displayedColumns = Object.keys(this.types[0]);
    });
  }
}
