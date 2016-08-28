import { Component }          from '@angular/core';
import { PhChartComponent }   from './charts/ph.chart.component';
import { TempChartComponent } from './charts/temp.chart.component';
import { UmidChartComponent } from './charts/umid.chart.component';

@Component({
    templateUrl : 'app/dashboard/dashboard.component.html',
    directives: [PhChartComponent,
                 TempChartComponent,
                 UmidChartComponent]
})
export class DashboardComponent { }