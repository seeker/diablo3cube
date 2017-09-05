import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CubeItem } from './cube-item';
import { CubeData } from './cube-data';
import { Item } from './item';

@Injectable()
export class CubeItemService {
  static readonly normalPrefix = 'normal';

  constructor(private localStorageService: LocalStorageService) { }

  /**
   * Get status data for all items have been created.
   * This means that a state was save for a item at one point, which caused
   * a record to be created.
   * @param  {Item[]}   items to fetch status data for
   * @return {CubeItem[]}       A list of CubeItem that exist
   */
  public getAll(items: Item[]): CubeItem[] {
    const cubeItems: CubeItem[] = [];

    for (const item of items) {
      if (this.hasItemFor(CubeItemService.normalPrefix, item.name)) {
        console.log('Found ' + item.name);
        cubeItems.push(this.get(item.name));
      }
    }

    return cubeItems;
  }

  /**
   * Get the data for the associated item
   * @param  {string}   name of the item to query
   * @return {CubeItem}      data for the item, will create a new data instance if not found
   */
  public get(name: string): CubeItem {
    return this.getItem(CubeItemService.normalPrefix, name);
  }

  /**
   * Set data for an item. The name is used as a key and is
   * extracted from the item itself.
   * @param  {CubeItem} item item to store
   * @return {boolean}       true if successfully stored
   */
  public set(item: CubeItem): boolean {
    return this.setItem(CubeItemService.normalPrefix, item);
  }

  private buildStoreKey(prefix: string, name: string): string {
    return `${prefix}-${name}`;
  }

  private setItem(prefix: string, item: CubeItem): boolean {
    return this.localStorageService.set(this.buildStoreKey(prefix, item.name), item);
  }

/**
 * Check if there is a entry for the given name.
 * @param  {string}  prefix that items are stored under (deprecated)
 * @param  {string}  name   of the item, used as a key
 * @return {boolean}        returns true if there is a record for the item
 */
  private hasItemFor(prefix: string, name: string): boolean {
    const storeKey: string = this.buildStoreKey(prefix, name);
    const stored: CubeData = this.localStorageService.get<CubeData>(storeKey);

    return !(stored === null);
  }

  private getItem(prefix: string, name: string): CubeItem {
    const storeKey: string = this.buildStoreKey(prefix, name);
    const stored: CubeData = this.localStorageService.get<CubeData>(storeKey);

    if (stored === null) {
      return new CubeItem(name);
    }

    // TODO static function to create instance from ItemData
    return new CubeItem(stored.name, stored.extractedNormal, stored.extractedSeason, stored.stashed);
  }
  
  public moveExtractedToNormal():void {
    const keys:Array<string> = this.localStorageService.keys();

    for (let storeKey of keys) {
      const stored: CubeData = this.localStorageService.get<CubeData>(storeKey);
      
      if(stored.extractedSeason === true) {
        stored.extractedSeason = false;
        stored.extractedNormal = true;
      }

      this.localStorageService.set(storeKey, stored);
    }
  }
}
