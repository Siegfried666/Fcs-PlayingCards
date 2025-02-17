import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypesAndMovesChartComponent } from './types-and-moves-chart.component';

describe('TypesAndMovesChartComponent', () => {
  let component: TypesAndMovesChartComponent;
  let fixture: ComponentFixture<TypesAndMovesChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TypesAndMovesChartComponent]
    });
    fixture = TestBed.createComponent(TypesAndMovesChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
