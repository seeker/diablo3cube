import { Injectable } from '@angular/core';
import { Item } from './item';

import 'rxjs/add/operator/map';

@Injectable()
export class ItemService {
  private itemStore = 'assets/items.json';

  private armors: Item[];
  private jewelry: Item[];
  private weapons: Item[];

  private itemData: any;

  constructor() {
    const data = require('assets/items.json');
    this.setData(data);
  }

  /**
   * Set the data for this service. Intended for testing.
   * @param {any} data to set for service
   */
  public setData(data: any): void {
    this.itemData = data;

    this.armors = this.createItems(this.itemData.armor);
    this.jewelry = this.createItems(this.itemData.jewelry);
    this.weapons = this.createItems(this.itemData.weapons);
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
    const result: Item[] = [];

    for (const row of jsonArray) {
      result.push(new Item(row.name, row.affix));
    }

    return result;
  }
}
