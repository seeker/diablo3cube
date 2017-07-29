import { Injectable } from '@angular/core';
import { Item } from './item';

import 'rxjs/add/operator/map';

var itemData = require('assets/items.json')

@Injectable()
export class ItemService {
  private itemStore = 'assets/items.json'

  private armors: Item[];
  private jewelry: Item[];
  private weapons: Item[];

  constructor() {
    this.armors = this.createItems(itemData.armor);
    this.jewelry = this.createItems(itemData.jewelry);
    this.weapons = this.createItems(itemData.weapons);
  }

  getArmors(): Promise<Item[]> {
    return Promise.resolve(this.armors);
  }

  getJewelry(): Promise<Item[]> {
    return Promise.resolve(this.jewelry);
  }

  getWeapons(): Promise<Item[]> {
    return Promise.resolve(this.weapons);
  }

  private createItems(jsonArray: any): Item[] {
    console.log(jsonArray);

    let result: Item[] = [];

    for (let row of jsonArray) {
      result.push(new Item(row.name, row.affix));
    }

    return result;
  }
}
