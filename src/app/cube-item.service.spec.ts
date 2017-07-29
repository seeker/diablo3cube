import { TestBed, inject } from '@angular/core/testing';

import { CubeItemService } from './cube-item.service';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';

import { CubeItem } from './cube-item';

const testPrefix = 'diablo3cube-test';

const existingItemKey = 'existingItem';
const newItemKey = 'newItem';
const existingItemSeasonalKey = 'existingItemSeasonal';

describe('CubeItemService', () => {

  /* tslint:disable:prefer-const */
  let cubeItemService: CubeItemService;
  let localStorageService: LocalStorageService;

  let existingItem: CubeItem;
  let existingItemSeasonal: CubeItem;
  let newItem: CubeItem;
  /* tslint:enable:prefer-const */

  beforeEach(() => {
    this.localStorageService = new LocalStorageService({ prefix: testPrefix, storageType: 'localStorage' });
    this.cubeItemService = new CubeItemService(this.localStorageService);
    this.localStorageService.clearAll('');

    this.existingItem = new CubeItem(existingItemKey);
    this.existingItemSeasonal = new CubeItem(existingItemSeasonalKey);
    this.newItem = new CubeItem(newItemKey);

    this.cubeItemService.set(this.existingItem);
  });

  it('should clear stored test data', () => {
    expect(this.localStorageService.clearAll('')).toEqual(true);
  });

  it('should be created', () => {
    expect(this.cubeItemService).toBeTruthy();
  });

  it('should store item', () => {
    expect(this.cubeItemService.set(this.newItem)).toEqual(true);
  });

  it('should have existing item', () => {
    expect(this.cubeItemService.get(existingItemKey)).toEqual(this.existingItem);
  });

  it('should not have item', () => {
    expect(this.cubeItemService.get(newItemKey)).toEqual(undefined);
  });
});
