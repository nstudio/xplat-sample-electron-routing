import { HomeComponent } from './home.component';
import { ProfileComponent } from './profile.component';

export const routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'profile/:id',
    component: ProfileComponent
  }
];
