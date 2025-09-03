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
        path: 'workshops/favorites',
        component: Favorites,
        title: 'Favorite workshops',
        pathMatch: 'full'
    },
    {
        path: 'workshops/:id',
        component: WorkshopDetails,
        // title: Name of the workshop goes in here
        children: [
            {
                path: '',
                component: SessionsList
            },
            {
                path: 'add-session',
                component: AddSession
            }
        ]
    },
];

// export default routes;
// export default [];