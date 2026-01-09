import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';

export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: Home },
    { path: "about", component: About },
    { path: "**", redirectTo: 'home' },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutes { }