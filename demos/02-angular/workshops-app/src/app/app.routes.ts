import { Routes } from '@angular/router';
import { Home } from './home/home';
import { PageNotFound } from './page-not-found/page-not-found';
import { Login } from './login/login';

export const routes: Routes = [
    {
        path: '',
        component: Home,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: Login,
    },
    {
        path: '**',
        component: PageNotFound
    },
];
