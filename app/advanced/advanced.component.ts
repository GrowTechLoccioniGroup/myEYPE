import { Component, OnInit }    from '@angular/core';
import { Slider }               from 'primeng/primeng';
import { AdvancedCallsService } from './calls/calls.service';
import { ClassOptions }         from '../classes/class.options';

@Component({
    templateUrl: 'app/advanced/advanced.component.html',
    directives: [Slider],
    providers:[AdvancedCallsService]
})
export class AdvancedComponent implements OnInit {
    public ServerOptions: ClassOptions = {
        id_parameters: 0,
        RGB: "",
        Light: false,
        AdressImage: ""
    };
    public ClientOptions: ClassOptions = {
        id_parameters: 0,
        RGB: "",
        Light: false,
        AdressImage: ""
    };
    public r: number = 0;
    public g: number = 0;
    public b: number = 0;

    constructor(private calls: AdvancedCallsService) { }

    ngOnInit() {
        this.getOptions();
    }

    private getOptions() {
        this.calls.GetAllOptions().subscribe(
            (option) => {
                this.ServerOptions = option.json();
                let x = this.ServerOptions.RGB.split("-");
                this.r = parseInt(x[0]);
                this.g = parseInt(x[1]);
                this.b = parseInt(x[2]);
            },
            error => console.log(error),
            () => console.log('Get options complete'));
    }

    private setOptions() {
        this.ClientOptions = this.ServerOptions;
        this.ClientOptions.RGB = this.r + "-" + this.g + "-" + this.b;
        this.calls.SetOptions(this.ClientOptions).subscribe(
            data => console.log(data),
            error => console.log(error),
            () => console.log('Set options complete'));
    }
}   
