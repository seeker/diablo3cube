import { Component, OnInit, Input } from '@angular/core';

import { CubeItemService } from '../cube-item.service';

import { Item } from '../item';
import { CubeItem } from '../cube-item';

@Component({
  /* tslint:disable:component-selector*/
  selector: 'tr[app-item-detail]',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent {
  private localItem: Item;
  private cube: CubeItem;

  @Input()
  set item(item: Item) {
    this.localItem = item;
    this.loadCubeData();
  }

  private loadCubeData(): void {
    this.cube = this.cubeItemService.get(this.localItem.name);
  }

  get item(): Item {
    return this.localItem;
  }

  constructor(private cubeItemService: CubeItemService) {
  }

  checkboxChanged() {
    this.cubeItemService.set(this.cube);
  }
}
