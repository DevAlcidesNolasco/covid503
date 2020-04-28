import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import * as CanvasJS from '../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  public datos;
  //public grafica = null;
  constructor(private covid19: Covid19Service) {
    this.covid19.getTotales().subscribe(datos => {
      this.datos = datos;      
      let dataPoints = [];
      let dataPointsDeaths = [];
      let dataPointsRecovered = [];
      let size = Object.keys(datos).length;
      console.log(size);
      //console.log(datos[size - 1].Date.substring(0, 4));
      //console.log(datos[size - 1].Date.substring(5, 7));
      //console.log(datos[size - 1].Date.substring(8, 10));
      //console.log(new Date(2017, 1, 5, 23));
      for (let i = 0; i < (size); i++) {
        dataPoints.push({ y: datos[i].Confirmed, x: new Date(datos[i].Date.substring(0, 4), (datos[i].Date.substring(5, 7) - 1), datos[i].Date.substring(8, 10)) });
        dataPointsDeaths.push({ y: datos[i].Deaths, x: new Date(datos[i].Date.substring(0, 4), (datos[i].Date.substring(5, 7) - 1), datos[i].Date.substring(8, 10)) });
        dataPointsRecovered.push({ y: datos[i].Recovered, x: new Date(datos[i].Date.substring(0, 4), (datos[i].Date.substring(5, 7) - 1), datos[i].Date.substring(8, 10)) });
      }
      var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        title: {
          text: "Casos de coronavirus"
        },
        axisX: {
          valueFormatString: "DDD",
          minimum: new Date(datos[0].Date.substring(0, 4), (datos[0].Date.substring(5, 7) - 1), datos[0].Date.substring(8, 10)),
          maximum: new Date(datos[size - 1].Date.substring(0, 4), (datos[size - 1].Date.substring(5, 7) - 1), datos[size - 1].Date.substring(8, 10))          
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
