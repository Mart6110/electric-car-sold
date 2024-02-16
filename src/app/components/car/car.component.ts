import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormsModule, NgForm } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

// Material
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';

import { CarService } from '../../services/car.service';

import { Car } from '../../interfaces/car.model';

import { CarDialogComponent } from '../car-dialog/car-dialog.component';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatInputModule,
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
  ],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss'
})

export class CarComponent implements OnInit, AfterViewInit {
  cars: Car[] = [];
  dataSource = new MatTableDataSource<Car>();
  displayedColumns: string[] = ['rank', 'model', 'quantity', 'changeQuantityPercent', 'action'];

  constructor(private carService: CarService, private dialog: MatDialog) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.fetchCars(); // Initialize car data retrieval
  }

  fetchCars() {
    // Fetch car data from the service
    this.carService.getCars().subscribe(cars => {
      this.dataSource.data = cars; // Update data source with fetched cars
    });
  }

  addCar(newCarData: any, form: NgForm) {
    // Create a new car object from the form data
    const newCar: Car = {
      id: 0,
      ...newCarData
    };

    // Add the new car through the service
    this.carService.addCar(newCar).subscribe(() => {
      this.fetchCars(); // Refresh car list after addition
      form.resetForm(); // Reset form after submission
    });
  }

  deleteCar(id: number) {
    // Confirmation dialog before deleting a car
    if (confirm('Are you sure you want to delete this car?')) {
      // Delete car through the service
      this.carService.deleteCar(id).subscribe(() => {
        // Refresh car list after deletion
        this.fetchCars();
      });
    }
  }

  openEditDialog(car: Car): void {
    // Open edit dialog with the specified car data
    const dialogRef = this.dialog.open(CarDialogComponent, {
      width: '400px',
      data: { ...car } // Pass a copy of the car object to prevent changes in the dialog from affecting the original data
    });

    // After the edit dialog is closed
    dialogRef.afterClosed().subscribe(result => {
      // If there is a result (i.e., user made changes)
      if (result) {
        // Update the car through the service
        this.carService.updateCar(result).subscribe(() => {
          // Refresh car list after updating the car
          this.fetchCars();
        });
      }
    });
  }

  ngAfterViewInit() {
    // Assign paginator and sort to the data source after view initialization
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
