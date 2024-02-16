import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isAdmin = false;

  constructor() { }

  toggleAdmin() {
    this.isAdmin = !this.isAdmin;
  }
}
