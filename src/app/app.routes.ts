import { Routes } from '@angular/router';
import { HeroesComponent } from './component/heroes/heroes.component';
import { HeroDetailsComponent } from './component/hero-details/hero-details.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'hero/:id',
        component: HeroDetailsComponent
    }
];
