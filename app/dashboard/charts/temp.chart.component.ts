import { Component, 
         OnInit }             from '@angular/core';
import { ChartsCallsService } from './calls/calls.service';
import { ClassParameters }    from '../../classes/class.parameters';
import { CORE_DIRECTIVES, 
         FORM_DIRECTIVES, 
         NgClass }            from '@angular/common';
import { CHART_DIRECTIVES }   from 'ng2-charts/ng2-charts';

@Component({
  selector: 'my-temp-chart',
  templateUrl: 'app/dashboard/charts/chart.component.html',
  styleUrls: ['app/dashboard/charts/chart.component.css'],
  providers: [ChartsCallsService],
  directives: [CHART_DIRECTIVES,
               NgClass,
               CORE_DIRECTIVES, 
               FORM_DIRECTIVES]
})
export class TempChartComponent implements OnInit {
  public ServerParameters: ClassParameters[] = [
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

  constructor(private calls: ChartsCallsService) { }

  private setParameters(): void {
      for (let i = 0; i <= 24; i++) {
        this.ServerParameters[i] = { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 };
      }
  }

  ngOnInit() {
    //this.setParameters(); // non funziona stranamente
    this.getParameters();
  }

  private getParameters(): void {
    this.calls.GetAllParameters().subscribe(
      (parameter) => {
        this.ServerParameters = parameter.json();

        if (this.ServerParameters.length < 24) {
          for (let i = this.ServerParameters.length; i < 24; i++) {
            this.ServerParameters[i] = { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 };
          }
        }

        this.lineChartData = [
          { data: [this.ServerParameters[23].AirTemperature, this.ServerParameters[22].AirTemperature, this.ServerParameters[21].AirTemperature, this.ServerParameters[20].AirTemperature, this.ServerParameters[19].AirTemperature, this.ServerParameters[18].AirTemperature, this.ServerParameters[17].AirTemperature, this.ServerParameters[16].AirTemperature, this.ServerParameters[15].AirTemperature, this.ServerParameters[14].AirTemperature, this.ServerParameters[13].AirTemperature, this.ServerParameters[12].AirTemperature, this.ServerParameters[11].AirTemperature, this.ServerParameters[10].AirTemperature, this.ServerParameters[9].AirTemperature, this.ServerParameters[8].AirTemperature, this.ServerParameters[7].AirTemperature, this.ServerParameters[6].AirTemperature, this.ServerParameters[5].AirTemperature, this.ServerParameters[4].AirTemperature, this.ServerParameters[3].AirTemperature, this.ServerParameters[2].AirTemperature, this.ServerParameters[1].AirTemperature, this.ServerParameters[0].AirTemperature], label: 'T. Aria' },
        ];
      },
      error => console.log(error),
      () => console.log('Get parameters complete!'));
  }

  public lineChartData: Array<any> = [
    { data: [this.ServerParameters[23].AirTemperature, this.ServerParameters[22].AirTemperature, this.ServerParameters[21].AirTemperature, this.ServerParameters[20].AirTemperature, this.ServerParameters[19].AirTemperature, this.ServerParameters[18].AirTemperature, this.ServerParameters[17].AirTemperature, this.ServerParameters[16].AirTemperature, this.ServerParameters[15].AirTemperature, this.ServerParameters[14].AirTemperature, this.ServerParameters[13].AirTemperature, this.ServerParameters[12].AirTemperature, this.ServerParameters[11].AirTemperature, this.ServerParameters[10].AirTemperature, this.ServerParameters[9].AirTemperature, this.ServerParameters[8].AirTemperature, this.ServerParameters[7].AirTemperature, this.ServerParameters[6].AirTemperature, this.ServerParameters[5].AirTemperature, this.ServerParameters[4].AirTemperature, this.ServerParameters[3].AirTemperature, this.ServerParameters[2].AirTemperature, this.ServerParameters[1].AirTemperature, this.ServerParameters[0].AirTemperature], label: 'T. Aria' },
  ];
  public lineChartLabels: Array<any> = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(0, 174, 237, 0.2)',
      borderColor: 'rgba(0, 174, 237, 1)',
      pointBackgroundColor: 'rgba(0, 174, 237, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 174, 237, 0.8)'
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
      backgroundColor: 'rgba(0, 174, 237, 0.2)',
      borderColor: 'rgba(0, 174, 237, 1)',
      pointBackgroundColor: 'rgba(0, 174, 237, 1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(0, 174, 237, 0.8)'
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