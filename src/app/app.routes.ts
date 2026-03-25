import { Routes } from '@angular/router';
import { SvgComponent } from './svg/svg.component'; // path must be correct

export const routes: Routes = [
  { path: '', redirectTo: '/map', pathMatch: 'full' },
  { path: 'map', component: SvgComponent },
];
