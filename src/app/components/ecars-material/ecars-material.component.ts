import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { ECarsData, eCarsTop25_2022 } from '../../ecars-data';
import { CommonModule } from '@angular/common';

// Material
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';

@Component({
  selector: 'app-ecars-material',
  standalone: true,
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatRippleModule,
  ],
  templateUrl: './ecars-material.component.html',
  styleUrl: './ecars-material.component.scss'
})
export class EcarsMaterialComponent implements AfterViewInit {
  dataSource = new MatTableDataSource<ECarsData>(eCarsTop25_2022);
  displayedColumns: string[] = ['rank', 'model', 'quantity', 'changeQuantityPercent'];

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}