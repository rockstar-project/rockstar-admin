import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { DashboardComponent } from './dashboard/dashoard.component';

const routes: Routes =[
    { 
        path: '', 
        redirectTo: 'home', 
        pathMatch: 'full' 
    },
    { 
        path: 'home',
        component: HomeComponent 
    },
    { 
        path: 'dashboard',             
        component: DashboardComponent 
    },
    { 
        path: 'callback',             
        component: CallbackComponent 
    }
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
