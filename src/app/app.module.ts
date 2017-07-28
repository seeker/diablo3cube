import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LocalStorageModule.withConfig({
    prefix: 'diablo3cube',
    storageType: 'localStorage'
    })
  ],
  providers: [LocalStorageModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
