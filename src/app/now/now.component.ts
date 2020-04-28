import { Component, OnInit } from '@angular/core';
import { Covid19Service } from '../covid19.service';
import * as CanvasJS from '../../assets/js/canvasjs.min.js';

@Component({
  selector: 'app-now',
  templateUrl: './now.component.html',
  styleUrls: ['./now.component.scss']
})
export class NowComponent implements OnInit {
  public summary;
  public d = new Date();
  public ye = new Intl.DateTimeFormat('es', { year: 'numeric' }).format(this.d);
  public mo = new Intl.DateTimeFormat('es', { month: 'long' }).format(this.d);
  public da = new Intl.DateTimeFormat('es', { day: '2-digit' }).format(this.d);

  constructor(private covid19: Covid19Service) {
    this.covid19.getSummarys().subscribe(summary => {
      this.summary = summary;
    });
    
  }

  ngOnInit() {
  }

}
