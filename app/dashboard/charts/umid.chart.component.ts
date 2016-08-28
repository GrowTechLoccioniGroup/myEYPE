import { Component, 
         OnInit }             from '@angular/core';
import { ChartsCallsService } from './calls/calls.service';
import { ClassParameters }    from '../../classes/class.parameters';
import { CORE_DIRECTIVES, 
         FORM_DIRECTIVES, 
         NgClass }            from '@angular/common';
import { CHART_DIRECTIVES }   from 'ng2-charts/ng2-charts';

@Component({
  selector: 'my-umid-chart',
  templateUrl: 'app/dashboard/charts/chart.component.html',
  styleUrls: ['app/dashboard/charts/chart.component.css'],
  providers: [ChartsCallsService],
  directives: [CHART_DIRECTIVES,
               NgClass, 
               CORE_DIRECTIVES, 
               FORM_DIRECTIVES]
})
export class UmidChartComponent implements OnInit {
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
          { data: [this.ServerParameters[23].Humidity, this.ServerParameters[22].Humidity, this.ServerParameters[21].Humidity, this.ServerParameters[20].Humidity, this.ServerParameters[19].Humidity, this.ServerParameters[18].Humidity, this.ServerParameters[17].Humidity, this.ServerParameters[16].Humidity, this.ServerParameters[15].Humidity, this.ServerParameters[14].Humidity, this.ServerParameters[13].Humidity, this.ServerParameters[12].Humidity, this.ServerParameters[11].Humidity, this.ServerParameters[10].Humidity, this.ServerParameters[9].Humidity, this.ServerParameters[8].Humidity, this.ServerParameters[7].Humidity, this.ServerParameters[6].Humidity, this.ServerParameters[5].Humidity, this.ServerParameters[4].Humidity, this.ServerParameters[3].Humidity, this.ServerParameters[2].Humidity, this.ServerParameters[1].Humidity, this.ServerParameters[0].Humidity], label: 'Umidità' },
        ];
      },
      error => console.log(error),
      () => console.log('Get parameter complete!'));
  }

  public lineChartData: Array<any> = [
    { data: [this.ServerParameters[23].Humidity, this.ServerParameters[22].Humidity, this.ServerParameters[21].Humidity, this.ServerParameters[20].Humidity, this.ServerParameters[19].Humidity, this.ServerParameters[18].Humidity, this.ServerParameters[17].Humidity, this.ServerParameters[16].Humidity, this.ServerParameters[15].Humidity, this.ServerParameters[14].Humidity, this.ServerParameters[13].Humidity, this.ServerParameters[12].Humidity, this.ServerParameters[11].Humidity, this.ServerParameters[10].Humidity, this.ServerParameters[9].Humidity, this.ServerParameters[8].Humidity, this.ServerParameters[7].Humidity, this.ServerParameters[6].Humidity, this.ServerParameters[5].Humidity, this.ServerParameters[4].Humidity, this.ServerParameters[3].Humidity, this.ServerParameters[2].Humidity, this.ServerParameters[1].Humidity, this.ServerParameters[0].Humidity], label: 'Umidità' },
  ];
  public lineChartLabels: Array<any> = ['00:00', '01:00', '02:00', '03:00', '04:00', '05:00', '06:00', '07:00', '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];
  public lineChartOptions: any = {
    animation: false,
    responsive: true
  };
  public lineChartColours: Array<any> = [
    { // grey
      backgroundColor: 'rgba(107, 163, 185, 0.2)',
      borderColor: 'rgba(107, 163, 185, 1)',
      pointBackgroundColor: 'rgba(107, 163, 185, 1))',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(107, 163, 185, 0.8)'
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
      backgroundColor: 'rgba(107, 163, 185, 0.2)',
      borderColor: 'rgba(107, 163, 185, 1)',
      pointBackgroundColor: 'rgba(107, 163, 185, 1))',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(107, 163, 185, 0.8)'
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