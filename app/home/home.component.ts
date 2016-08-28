import { Component, OnInit } from '@angular/core';
import { HomeCallsService }  from './calls/calls.service';
import { ClassParameters }   from '../classes/class.parameters';
import { ClassOptions }      from '../classes/class.options';
import { DataService } from './../data/data.service';

@Component({
    templateUrl: 'app/home/home.component.html',
    styleUrls: ['app/home/home.component.css'],
    providers: [HomeCallsService, DataService],
})
export class HomeComponent implements OnInit {
    private ServerOptions: ClassOptions = {
        id_parameters: 0,
        RGB: '000-000-000',
        Light: true,
        AdressImage: '../app/ext/plants/Insalata.png'
    };
    private ClientOptions: ClassOptions = {
        id_parameters: 0,
        RGB: '',
        Light: false,
        AdressImage: ''
    };
    public ServerParameters: ClassParameters[] = [
        { id_parameters: 0, TimeStamp: new Date(2016, 0, 0), AirTemperature: 0.0, WaterTemperature: 0.0, Humidity: 0, PH: 0.0, Conductivity: 0 }
    ];

    constructor(
        private calls: HomeCallsService,
        private data: DataService) {
        }

    ngOnInit() {
        this.getParameters();
        this.getOptions();
        this.data.setLastRGB(this.ServerOptions.RGB);
    }

    private getName(): string {
        let k = this.ServerOptions.AdressImage.split('/');
        let j = k[4].split('.');
        this.data.SetName(j[0]);
        return j[0];
    }

    private getBGColore(): string {
        let x = this.ServerOptions.RGB.split('-');
        let r = parseInt(x[0]);
        let g = parseInt(x[1]);
        let b = parseInt(x[2]);
        let RGB: string = 'rgb(' + r + ',' + g + ',' + b + ')';
        return RGB
    }

    private getParameters(): void {
        this.calls.GetAllParameters().subscribe(
            (parameter) => {
                this.ServerParameters = parameter.json();
            },
            error => console.log(error),
            () => console.log('Get parameters complete!'));
    }

    private getOptions(): void {
        this.calls.GetAllOptions().subscribe(
            (option) => {
                this.ServerOptions = option.json();
            },
            error => console.log(error),
            () => console.log('Get options complete'));

        this.ClientOptions = this.ServerOptions;
    }

    private setOptions() {
        this.ClientOptions.Light = !this.ClientOptions.Light;
        if (this.ClientOptions.Light == false) {
            this.ClientOptions.RGB = '000-000-000';
        } else {
            this.ClientOptions.RGB = this.data.getLastRGB();
        }
        this.calls.SetOptions(this.ClientOptions).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set option complete'));
    }

    private phColor(value: number): string {
        if (value >= 0 && value <= 0.9) {
            return 'rgb(209,0,16)';
        } else if (value >= 1 && value <= 1.9) {
            return 'rgb(206,69,0)';
        } else if (value >= 2 && value <= 2.9) {
            return 'rgb(204,111,0)';
        } else if (value >= 3 && value <= 3.9) {
            return 'rgb(232,187,0)';
        } else if (value >= 4 && value <= 4.9) {
            return 'rgb(229,223,0)';
        } else if (value >= 5 && value <= 5.9) {
            return 'rgb(171,226,0)';
        } else if (value >= 6 && value <= 6.9) {
            return 'rgb(133,201,14)';
        } else if (value >= 7 && value <= 7.9) {
            return 'rgb(17,191,21)';
        } else if (value >= 8 && value <= 8.9) {
            return 'rgb(0,183,131)';
        } else if (value >= 9 && value <= 9.9) {
            return 'rgb(14,132,160)';
        } else if (value >= 10 && value <= 10.9) {
            return 'rgb(16,81,158)';
        } else if (value >= 11 && value <= 11.9) {
            return 'rgb(18,47,155)';
        } else if (value >= 12 && value <= 12.9) {
            return 'rgb(55,19,153)';
        } else if (value >= 13 && value <= 14) {
            return 'rgb(59,0,127)';
        } else if (value > 14 || value < 0) {
            return 'rgb(0,0,0)';
        }   
    }
}