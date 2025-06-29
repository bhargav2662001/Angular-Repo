import { Routes } from "@angular/router";

export const appRoutes: Routes = [
    {
        path: " ",
        redirectTo: "/login",
        pathMatch: "full"
    },



    {
        path: "login",
        loadChildren: () => import("./login/login.module").then(m => m.LoginModule)
    },

    { path: '**', redirectTo: '/login' },
];