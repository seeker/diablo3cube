import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {SettingComponent} from './setting/setting.component';
import {ItemListComponent} from './item-list/item-list.component';

const routes: Routes = [
  {
    path: 'settings',
    component: SettingComponent
  },
  {
    path: 'items',
    component: ItemListComponent
  },
  {
  path: '',
  redirectTo: '/items',
  pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
