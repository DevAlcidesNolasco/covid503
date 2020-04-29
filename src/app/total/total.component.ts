import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import * as CanvasJS from '../../assets/js/canvasjs.min.js';
import { Informe } from '../classes/informe';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  public informes: Array<Informe>;
  constructor(private covid19: Covid19Service) {
    this.covid19.getTotales().subscribe(datos => {
      this.informes = datos;
      let dataPoints = this.informes.map(a => ({
        y: a.Confirmed,
        x: new Date(
          a.Date
        )
      }));
      let dataPointsDeaths = this.informes.map(a => ({
        y: a.Deaths,
        x: new Date(
          a.Date
        )
      }));           
      let dataPointsRecovered = this.informes.map(a => ({
        y: a.Recovered,
        x: new Date(
          a.Date
        )
      }));
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
          text: "Curva desarrollo de coronavirus"
        },
        axisX: {
          valueFormatString: "DDD",
          minimum: new Date(
            this.informes[0].Date
          ),
          maximum: new Date(
            this.informes[this.informes.length - 1].Date
          )
        },
        axisY: {
          title: "Numero de casos"
        },
        legend: {
          verticalAlign: "top",
          horizontalAlign: "right",
          dockInsidePlotArea: true
        },
        toolTip: {
          shared: true
        },
        data: [{
          name: "Confirmados",
          showInLegend: true,
          legendMarkerType: "square",
          type: "area",
          color: "rgba(0,191,6,0.6)",
          markerSize: 1,
          dataPoints: dataPoints
        },
        {
          name: "Recuperados",
          showInLegend: true,
          legendMarkerType: "square",
          type: "area",
          color: "rgba(40,213,255,0.7)",
          markerSize: 1,
          dataPoints: dataPointsRecovered
        },
        {
          name: "Muertes",
          showInLegend: true,
          legendMarkerType: "square",
          type: "area",
          color: "rgba(255,0,0,0.7)",
          markerSize: 1,
          dataPoints: dataPointsDeaths
        }]
      });
      chart.render();
    });

  }

  ngOnInit() {
  }

}
