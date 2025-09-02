import { Routes } from '@angular/router';

import { WorkshopsList } from './workshops-list/workshops-list';
import { AddWorkshop } from './add-workshop/add-workshop';
import { Favorites } from './favorites/favorites';

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
];

// export default routes;
// export default [];