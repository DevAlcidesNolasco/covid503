import { Component, OnInit, ɵConsole } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import * as CanvasJS from '../../assets/js/canvasjs.min.js';
import { Summary } from '../classes/summary';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent implements OnInit {
  public summary: Summary;
  public d = new Date();
  public ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(this.d);
  public mo = new Intl.DateTimeFormat('es', { month: 'long' }).format(this.d);
  public da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(this.d);

  constructor(private covid19: Covid19Service) {
    this.covid19.getSummarys().subscribe(summary => {
      this.summary = summary;
      console.log(this.summary);
      var chart = new CanvasJS.Chart("chartCurveCA", {
        animationEnabled: true,
        exportEnabled: true,
        title: {
          text: "Comparativa de casos confirmados CentroAmerica"
        },
        data: [{
          type: "column",
          dataPoints: [
            { y: this.summary.Countries[97].TotalConfirmed, label: this.summary.Countries[97].Country },
            { y: this.summary.Countries[89].TotalConfirmed, label: this.summary.Countries[89].Country },
            { y: this.summary.Countries[159].TotalConfirmed, label: this.summary.Countries[159].Country },
            { y: this.summary.Countries[65].TotalConfirmed, label: this.summary.Countries[65].Country },
            { y: this.summary.Countries[53].TotalConfirmed, label: this.summary.Countries[53].Country },
            { y: this.summary.Countries[170].TotalConfirmed, label: this.summary.Countries[170].Country },
            { y: this.summary.Countries[22].TotalConfirmed, label: this.summary.Countries[22].Country }
          ]
        }]
      });

      chart.render();
    });
  }
  ngOnInit() {

  }

}
