import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../interfaces/car.model';

@Injectable({
  providedIn: 'root' // This service is provided in the root module
})
export class CarService {
  private apiUrl = 'http://localhost:3000/cars'; // API URL for car data

  constructor(private http: HttpClient) { }

  // Method to get all cars from the API
  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>(this.apiUrl); // Return an observable of Car array
  }

  // Method to add a new car to the API
  addCar(newCar: Car): Observable<any> {
    return this.http.post(this.apiUrl, newCar); // Return an observable for the HTTP post request
  }

  // Method to delete a car from the API based on its ID
  deleteCar(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`; // Construct the URL for the specific car
    return this.http.delete(url); // Return an observable for the HTTP delete request
  }

  // Method to update a car in the API
  updateCar(updatedCar: Car): Observable<Car> {
    const url = `${this.apiUrl}/${updatedCar.id}`; // Construct the URL for the specific car
    return this.http.put<Car>(url, updatedCar); // Return an observable for the HTTP put request
  }
}
