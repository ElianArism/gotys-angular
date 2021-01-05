import { Component, Input, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grafica-barras',
  templateUrl: './grafica-barras.component.html',
  styleUrls: ['./grafica-barras.component.css']
})
export class GraficaBarrasComponent implements OnDestroy{
  @Input() results : any[] = [];

  multi: any[]; 

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  private interval;
  constructor() {}

  ngOnDestroy(): void {
   clearInterval(this.interval); // limpiar interval para evitar fugas de memoria 
  }

  onSelect(event) {
    console.log(event);
  }
}
