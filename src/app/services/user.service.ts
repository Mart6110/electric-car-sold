import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // This service is provided in the root module
})
export class UserService {
  isAdmin = false; // Boolean flag to indicate if the user is an admin

  constructor() { }

  // Method to toggle the admin status
  toggleAdmin() {
    this.isAdmin = !this.isAdmin; // Toggle the isAdmin flag
  }
}
