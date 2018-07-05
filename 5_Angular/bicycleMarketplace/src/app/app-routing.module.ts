import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromBikes from './bikes';
import { NotFoundComponent } from './not-found/not-found.component';
import { BikeResolve } from './resolvers';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'bikes',
        pathMatch: 'full',
    },
    {
        path: 'bikes',
        children: [
            {   path: '',
                component: fromBikes.BikeListComponent,
            },
            {
                path: 'listings',
                component: fromBikes.BikeManageComponent,
            },
            {
                path: 'new',
                component: fromBikes.BikeNewComponent,
                resolve: {
                    book: BikeResolve
                }
            },
        ],
    },
    {
        path: '**',
        component: NotFoundComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { enableTracing: false })],
    exports: [RouterModule],
})

export class AppRoutingModule {}
