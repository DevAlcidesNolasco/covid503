import { Component, OnInit, ɵConsole } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import * as CanvasJS from '../../assets/js/canvasjs.min.js';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent implements OnInit {
  summary;
  public d = new Date();
  public ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(this.d);
  public mo = new Intl.DateTimeFormat('es', { month: 'long' }).format(this.d);
  public da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(this.d);

  constructor(private covid19: Covid19Service) {
    

    this.covid19.getTotales();

  }
  ngOnInit() {
    this.covid19.getSummarys().subscribe(summary => {
      this.summary = summary;
      //console.log(this.summary.Countries);
      let chart = new CanvasJS.Chart("chartContainerCA", {
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
    console.log(this.summary);
  }

}
