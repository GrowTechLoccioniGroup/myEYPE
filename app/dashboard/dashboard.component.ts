import { Component } from '@angular/core';
import { CORE_DIRECTIVES } from '@angular/common';
import { PhChartComponent } from '../charts/ph.chart.component';
import { TempChartComponent } from '../charts/temp.chart.component';
import { UmidChartComponent } from '../charts/umid.chart.component';

@Component({
    selector: 'my-dashboard',
    templateUrl : 'app/dashboard/dashboard.component.html',
    styleUrls: ['app/dashboard/dashboard.component.css'],
    directives: [ CORE_DIRECTIVES, PhChartComponent, TempChartComponent, UmidChartComponent ]
})

export class DashboardComponent {
}