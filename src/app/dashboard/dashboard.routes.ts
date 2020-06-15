import { Routes } from '@angular/router';
import { StatisticsComponent } from '../incomes-expenses/statistics/statistics.component';
import { IncomesExpensesComponent } from '../incomes-expenses/incomes-expenses.component';
import { DetailsComponent } from '../incomes-expenses/details/details.component';

export const DashboardRoutes: Routes = [

    { path: '', component: StatisticsComponent }, // En una rutina hija el path '' no me lleva al dashboard sino al componente definido
    { path: 'incomes-expenses', component: IncomesExpensesComponent },
    { path: 'detail', component: DetailsComponent }
];
