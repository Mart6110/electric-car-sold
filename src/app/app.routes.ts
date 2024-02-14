import { Routes } from '@angular/router';

import { EcarsComponent } from './components/ecars/ecars.component';
import { EcarsMaterialComponent } from './components/ecars-material/ecars-material.component';

export const routes: Routes = [
    { path: '',   redirectTo: '/ecars', pathMatch: 'full' },
    { path: 'ecars', component: EcarsComponent },
    { path: 'ecarsmaterial', component: EcarsMaterialComponent }
];
