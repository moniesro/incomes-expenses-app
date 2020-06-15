import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardRoutes } from './dashboard/dashboard.routes';

const routes: Routes = [

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {
        path: '',
        component: DashboardComponent,
        children: DashboardRoutes

    },
    { path: '**', redirectTo: '' } // '**' cualquier otro path me redirecciona a ''
];


@NgModule({
    imports: [
        // Se usa forRoot pq este es el archivo de mis rutas principales
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule // para usarlos afuera
    ]

})

export class AppRoutingModule {

}
