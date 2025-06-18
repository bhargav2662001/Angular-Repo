import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login.component';
import { LandingpageComponent } from './landingpage/landingpage.component';
import { AuthComponent } from './auth/auth.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    children: [
       {
            path: '',
            component: LandingpageComponent,
            pathMatch: 'full',
    },
    {
        path: 'auth',
        component: AuthComponent, 
      },
      {
        path: '**',
        redirectTo: 'login'
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}