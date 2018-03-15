import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {UserComponent} from './components/user.component';
import {AboutComponent} from './components/about.component';

const appRoutes: Routes = [
  {
    path:'home',
    component: UserComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'', redirectTo:'home', pathMatch:'full'
}
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
