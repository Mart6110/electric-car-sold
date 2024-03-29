import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

import { Car } from '../../interfaces/car.model';

@Component({
  selector: 'app-car-dialog',
  standalone: true,
  imports: [MatButtonModule, MatFormFieldModule, MatInputModule, FormsModule],
  templateUrl: './car-dialog.component.html',
  styleUrl: './car-dialog.component.scss'
})
export class CarDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<CarDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Car // Injected data containing the car object
  ) { }

  // Close the dialog without saving changes
  onCancelClick(): void {
    this.dialogRef.close();
  }

  // Close the dialog and pass the modified car object back
  onSaveClick(): void {
    this.dialogRef.close(this.data);
  }

}
