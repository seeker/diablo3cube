import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { LocalStorageModule } from 'angular-2-local-storage';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';

import { ItemService } from './item.service';
import { CubeItemService } from './cube-item.service';
import { ItemListComponent } from './item-list/item-list.component';

import { SettingService } from './setting.service';
import { SettingComponent } from './setting/setting.component';
import { ItemFilterService } from './item-filter.service';
import { ItemSearchPipe } from './item-search.pipe';
import { ItemFilterPipe } from './item-filter.pipe';
import { ImportExportService } from './import-export.service';
import { ImportExportComponent } from './import-export/import-export.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemDetailComponent,
    ItemListComponent,
    SettingComponent,
    ItemSearchPipe,
    ItemFilterPipe,
    ImportExportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    LocalStorageModule.withConfig({
      prefix: 'diablo3cube',
      storageType: 'localStorage'
    })
  ],
  exports: [ItemSearchPipe, ItemFilterPipe],
  providers: [LocalStorageModule,
    ItemService,
    CubeItemService,
    SettingService,
    ItemFilterService,
    ImportExportService],
  bootstrap: [AppComponent]
})
export class AppModule { }
