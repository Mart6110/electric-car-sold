import { Routes } from '@angular/router';

import { EcarsComponent } from './components/ecars/ecars.component';
import { EcarsMaterialComponent } from './components/ecars-material/ecars-material.component';
import { CarComponent } from './components/car/car.component';

import { AdminGuard } from './guards/admin.guard';


export const routes: Routes = [
    { path: '',   redirectTo: '/electriccars', pathMatch: 'full' },
    { path: 'electriccars', component: EcarsComponent },
    { path: 'cars', component: EcarsMaterialComponent },
    { path: 'carsadmin', component: CarComponent, canActivate: [AdminGuard] },
];
