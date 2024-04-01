import { Routes } from '@angular/router';
import path from 'path';
import { title } from 'process';

export const routes: Routes = [
    {
        path:'dashboard',
        loadComponent : () => import('./dashboard/dashboard.component'),
        children: [
            {           
                path: 'change-detection',
                title: 'Change Detection',
                loadComponent : () => import('./dashboard/pages/change-detection/change-detection.component'),
            },
            {           
                path: 'chat-room',
                title: 'Chat Room',
                loadComponent : () => import('./dashboard/pages/chat-room/chat-room.component'),
            },
            {           
                path: 'control-flow',
                title: 'Control Flow',
                loadComponent : () => import('./dashboard/pages/control-flow/control-flow.component'),
            },
            {           
                path: 'quotes',
                title: 'Citas',
                loadComponent : () => import('./dashboard/pages/quotes/quotes.component'),
            },
            {           
                path: 'create-quote',
                title: 'Crear Cita',
                loadComponent : () => import('./dashboard/pages/create-quote/create-quote.component'),
            },
            {           
                path: 'user/:id',
                title: 'User view',
                loadComponent : () => import('./dashboard/pages/user/user.component'),
            },
            {
                path: '',
                redirectTo:'quotes',
                pathMatch: 'full'
            }
        ]
    },
    {
        path:'login',
        loadComponent : () => import('./login/login.component'),
    },
    {
        path: 'sign-in',
        loadComponent : () => import('./sign-in/sign-in.component'),
    },
    {
        path:'',
        redirectTo : '/dashboard/login',
        pathMatch: 'full'
    }
];
