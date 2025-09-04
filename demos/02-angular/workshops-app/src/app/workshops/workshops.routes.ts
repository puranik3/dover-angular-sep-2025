import { Routes } from '@angular/router';

import { WorkshopsList } from './workshops-list/workshops-list';
import { AddWorkshop } from './add-workshop/add-workshop';
import { Favorites } from './favorites/favorites';
import { WorkshopDetails } from './workshop-details/workshop-details';
import { SessionsList } from './workshop-details/sessions-list/sessions-list';
import { AddSession } from './workshop-details/add-session/add-session';

export const routes: Routes = [
    {
        path: 'workshops',
        component: WorkshopsList,
        title: 'List of workshops',
        pathMatch: 'full'
    },
    {
        path: 'workshops/add',
        component: AddWorkshop,
        title: 'List of workshops',
        pathMatch: 'full'
    },
    {
        path: 'workshops/edit/:id',
        component: AddWorkshop,
        title: 'Edit a workshop',
    },
    {
        path: 'workshops/favorites',
        component: Favorites,
        title: 'Favorite workshops',
        pathMatch: 'full'
    },
    {
        path: 'workshops/:id',
        loadComponent: () =>
            import('./workshop-details/workshop-details').then(
                (m) => m.WorkshopDetails
            ),
        // title: Name of the workshop goes in here
        children: [
            {
                path: '',
                loadChildren: () =>
                import('./workshop-details.routes').then((m) => m.parentRoutes),
            },
        ],
    },
];

// export default routes;
// export default [];