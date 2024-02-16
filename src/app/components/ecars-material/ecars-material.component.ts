import { OnInit, AfterViewInit, Component, ViewChild } from '@angular/core';
import { ECarsData, eCarsTop25_2022 } from '../../ecars-data';
import { CommonModule } from '@angular/common';

// Material
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';

import { CarService } from '../../services/car.service';

import { Car } from '../../interfaces/car.model';

@Component({
  selector: 'app-ecars-material',
  standalone: true, // Note: standalone property is not recognized in Angular, potential typo?
  imports: [
    CommonModule, // Import CommonModule for common Angular directives
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule,
  ],
  templateUrl: './ecars-material.component.html', // HTML template file path
  styleUrl: './ecars-material.component.scss' // SCSS style file path (Note: should be styleUrls)
})
export class EcarsMaterialComponent implements OnInit, AfterViewInit {
  cars: Car[] = [];
  dataSource = new MatTableDataSource<Car>(); // Data source for the MatTable
  displayedColumns: string[] = ['rank', 'model', 'quantity', 'changeQuantityPercent']; // Columns to display

  constructor(private carService: CarService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator; // Reference to the MatPaginator component
  @ViewChild(MatSort) sort!: MatSort; // Reference to the MatSort component

  ngOnInit(): void {
    this.fetchCars(); // Fetch cars data when component initializes
  }

  fetchCars() {
    // Subscribe to the car service to fetch cars data
    this.carService.getCars().subscribe(cars => {
      // Assign fetched cars data to the data source
      this.dataSource.data = cars;
    });
  }

  ngAfterViewInit() {
    // Assign the paginator and sort to the data source after view initialization
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    // Filter the data source based on the input value
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    // Go to the first page of pagination if available
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
