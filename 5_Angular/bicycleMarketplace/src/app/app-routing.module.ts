import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import * as fromBikes from './bikes';
import { NotFoundComponent } from './not-found/not-found.component';
import { BikeResolve } from './resolvers';
import { HomeComponent } from './home/home.component';

import * as fromGuards from './guards';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
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
                canActivate: [fromGuards.AuthGuard],
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
