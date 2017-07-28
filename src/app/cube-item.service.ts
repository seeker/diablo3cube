import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';
import { CubeItem } from './cube-item';
import { CubeData } from './cube-data';

@Injectable()
export class CubeItemService {
  static readonly normalPrefix: string = "normal";
  static readonly seasonalPrefix: string = "seasonal";



  constructor(private localStorageService: LocalStorageService) { }

  public getNormal(name: string): CubeItem {
    return this.getItem(CubeItemService.normalPrefix, name);
  }

  public setNormal(item: CubeItem): boolean {
    return this.setItem(CubeItemService.normalPrefix, item);
  }

  public getSeasonal(name: string): CubeItem {
    return this.getItem(CubeItemService.seasonalPrefix, name);
  }

  public setSeasonal(item: CubeItem): boolean {
    return this.setItem(CubeItemService.seasonalPrefix, item);
  }

  private buildStoreKey(prefix: string, name: string): string {
    return `${prefix}-${name}`;
  }

  private setItem(prefix: string, item: CubeItem): boolean {
    return this.localStorageService.set(this.buildStoreKey(prefix, item.name), item);
  }

  private getItem(prefix: string, name: string): CubeItem {
    let storeKey: string = this.buildStoreKey(prefix, name);
    let stored: CubeData = this.localStorageService.get<CubeData>(storeKey);

    if (stored === null) {
      return undefined;
    }

    //TODO static function to create instance from ItemData
    return new CubeItem(stored.name, stored.extracted, stored.stashed);
  }
}
