import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { UserService } from "../services/user.service";

@Injectable({
  providedIn: 'root' // This service is provided in the root module
})

export class AdminGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}

  // canActivate method to determine if the user is authorized to access the route
  canActivate(): boolean {
    // Check if the user is an admin
    if (this.userService.isAdmin) {
      return true; // Allow access if user is admin
    } else {
      // Redirect to cars route if user is not admin
      this.router.navigate(['/cars']);
      return false; // Deny access
    }
  }
}
