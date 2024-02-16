import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ECarsData, eCarsTop25_2022 } from '../../ecars-data';

@Component({
  selector: 'app-ecars',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ecars.component.html',
  styleUrl: './ecars.component.scss'
})
export class EcarsComponent implements OnInit {
  // Observable to hold the top 25 electric cars data
  eCarsTop25$: Observable<ECarsData[]> = of([]);

  ngOnInit() {
    // Initialize the observable with the top 25 electric cars data
    this.eCarsTop25$ = of(eCarsTop25_2022);
  }
}
