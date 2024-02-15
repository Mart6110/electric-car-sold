import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private apiUrl = 'http://localhost:3000/cars';

  constructor(private http: HttpClient) { }

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl);
  }

  addCar(newCar: Car): Observable<any> {
    return this.http.post(this.apiUrl, newCar);
  }

  deleteCar(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url);
  }

  updateCar(updatedCar: Car): Observable<Car> {
    const url = `${this.apiUrl}/${updatedCar.id}`;
    return this.http.put<Car>(url, updatedCar);
  }
}