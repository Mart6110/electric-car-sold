import { Routes } from '@angular/router';

import { EcarsComponent } from './components/ecars/ecars.component';
import { EcarsMaterialComponent } from './components/ecars-material/ecars-material.component';
import { CarComponent } from './components/car/car.component';

import { AdminGuard } from './guards/admin.guard';

// Define the routes for the application
export const routes: Routes = [
    // Redirect to Electric cars page by default
    { path: '',   redirectTo: '/electriccars', pathMatch: 'full' },
    { path: 'electriccars', component: EcarsComponent },
    { path: 'cars', component: EcarsMaterialComponent },
    // Route for Cars admin page with AdminGuard for authentication
    { path: 'carsadmin', component: CarComponent, canActivate: [AdminGuard] },
];
