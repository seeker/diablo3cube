import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CubeItem } from './cube-item';
import { CubeData } from './cube-data';

@Injectable()
export class CubeItemService {
  static readonly normalPrefix = 'normal';

  constructor(private localStorageService: LocalStorageService) { }

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

  private getItem(prefix: string, name: string): CubeItem {
    const storeKey: string = this.buildStoreKey(prefix, name);
    const stored: CubeData = this.localStorageService.get<CubeData>(storeKey);

    if (stored === null) {
      return new CubeItem(name);
    }

    // TODO static function to create instance from ItemData
    return new CubeItem(stored.name, stored.extractedNormal, stored.extractedSeason, stored.stashed);
  }
}
