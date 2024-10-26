import { Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { ComparisonComponent } from './comparison/comparison.component';

export const routes: Routes = [
    {
        path: "", redirectTo: "home", pathMatch: "full"
    },
    {
        path: "home", component: MainPageComponent
    },
    {
        path: "comparison", component: ComparisonComponent
    }
];
