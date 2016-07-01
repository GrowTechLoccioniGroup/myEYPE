import { Component } from '@angular/core';
import { RecipeService } from '../recipe/recipe.service';
import { CORE_DIRECTIVES, FORM_DIRECTIVES, NgClass } from '@angular/common';
import { CHART_DIRECTIVES } from 'ng2-charts/ng2-charts';
import { ClassParameters } from '../classes/class.parameters'

@Component({
  selector: 'my-ph-chart',
  providers: [RecipeService],
  templateUrl: 'app/charts/chart.component.html',
  styleUrls: ['app/charts/chart.component.css'],
  directives: [CHART_DIRECTIVES, NgClass, CORE_DIRECTIVES, FORM_DIRECTIVES]
})

export class PhChartComponent {
  public otherParameters: ClassParameters[] = [
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 },
    { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
  ];

  constructor(private _recipeService: RecipeService) {
  }

  ngOnInit() {
    this.getParametersItems();
  }

  private getParametersItems(): void {
    this._recipeService.getParameters().subscribe(
      (parameter) => {
        this.otherParameters = parameter.json();

        if (this.otherParameters.length < 24) {
          for (let i = this.otherParameters.length; i < 24; i++) {
            this.otherParameters[i] = { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 };
          }
        }

        this.lineChartData = [
          { data: [this.otherParameters[23].PH, this.otherParameters[22].PH, this.otherParameters[21].PH, this.otherParameters[20].PH, this.otherParameters[19].PH, this.otherParameters[18].PH, this.otherParameters[17].PH, this.otherParameters[16].PH, this.otherParameters[15].PH, this.otherParameters[14].PH, this.otherParameters[13].PH, this.otherParameters[12].PH, this.otherParameters[11].PH, this.otherParameters[10].PH, this.otherParameters[9].PH, this.otherParameters[8].PH, this.otherParameters[7].PH, this.otherParameters[6].PH, this.otherParameters[5].PH, this.otherParameters[4].PH, this.otherParameters[3].PH, this.otherParameters[2].PH, this.otherParameters[1].PH, this.otherParameters[0].PH], label: 'pH' },
        ];
      },
      error => console.log(error),
      () => console.log('Get all PARAMETERS complete!'));
  }

  public lineChartData: Array<any> = [
    { data: [this.otherParameters[23].PH, this.otherParameters[22].PH, this.otherParameters[21].PH, this.otherParameters[20].PH, this.otherParameters[19].PH, this.otherParameters[18].PH, this.otherParameters[17].PH, this.otherParameters[16].PH, this.otherParameters[15].PH, this.otherParameters[14].PH, this.otherParameters[13].PH, this.otherParameters[12].PH, this.otherParameters[11].PH, this.otherParameters[10].PH, this.otherParameters[9].PH, this.otherParameters[8].PH, this.otherParameters[7].PH, this.otherParameters[6].PH, this.otherParameters[5].PH, this.otherParameters[4].PH, this.otherParameters[3].PH, this.otherParameters[2].PH, this.otherParameters[1].PH, this.otherParameters[0].PH], label: 'pH' },
  ];
  public lineChartLabels: Array<any> = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';


  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}