/**
 * Created by hkfq4 on 01.12.2016.
 */


import{Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {KontaktComponent} from './kontakt/kontakt.component';
import {ModuleWithProviders} from '@angular/core';
import {FlugSuchenComponent} from './flug/flugsuchen/flugsuchen.component';

const appRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'kontakt',
        component: KontaktComponent
    },
    {
        path: 'flugsuchen',
        component: FlugSuchenComponent
    },
    {
        path: '**',
        redirectTo: 'home'
    }
    ];

export var routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
