import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import {ItemService} from './item.service';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
    prefix: 'diablo3cube',
    storageType: 'localStorage'
    })
  ],
  providers: [LocalStorageModule, ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
