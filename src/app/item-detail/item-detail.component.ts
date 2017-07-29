import { Component, OnInit, Input } from '@angular/core';

import { CubeItemService } from '../cube-item.service';

import { Item } from '../item';
import { CubeItem } from '../cube-item';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.css']
})

export class ItemDetailComponent {
  private localItem: Item;
  private cube: CubeItem;

  @Input()
  set item(item: Item) {
    console.log('Item ' + item.name + ' set');
    this.localItem = item;
    this.loadCubeData();
  }

  private loadCubeData(): void {
    const savedState: CubeItem = this.cubeItemService.get(this.localItem.name);

    if (savedState === undefined) {
      console.log('No entry found for ' + this.localItem.name + ', creating new entry');
      this.cube = new CubeItem(this.localItem.name);
    } else {
      console.log('Entry found for ' + this.localItem.name);
      this.cube = savedState;
    }
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
