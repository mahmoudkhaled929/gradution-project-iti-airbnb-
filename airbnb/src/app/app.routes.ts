import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PropertyDetail } from './property-detail/property-detail';
import { Booking } from './booking/booking';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: Home },
  { path: 'property/:id', component: PropertyDetail },
  { path: 'booking', component: Booking },
  { path: '**', redirectTo: '' }
];
