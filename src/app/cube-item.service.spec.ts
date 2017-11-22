import { TestBed, inject } from '@angular/core/testing';

import { CubeItemService } from './cube-item.service';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';

import { CubeItem } from './cube-item';

const testPrefix = 'diablo3cube-test';

const existingItemKey = 'existingItem';
const newItemKey = 'newItem';
const existingItemSeasonalKey = 'existingItemSeasonal';

describe('CubeItemService', () => {

  let cubeItemService: CubeItemService;
  let localStorageService: LocalStorageService;

  let existingItem: CubeItem;
  let existingItemSeasonal: CubeItem;
  let newItem: CubeItem;

  beforeEach(() => {
    localStorageService = new LocalStorageService({ prefix: testPrefix, storageType: 'localStorage' });
    cubeItemService = new CubeItemService(localStorageService);
    localStorageService.clearAll('');

    existingItem = new CubeItem(existingItemKey);
    existingItemSeasonal = new CubeItem(existingItemSeasonalKey, false, true);
    newItem = new CubeItem(newItemKey);

    cubeItemService.set(existingItem);
    cubeItemService.set(existingItemSeasonal);

  });

  it('should clear stored test data', () => {
    expect(localStorageService.clearAll('')).toEqual(true);
  });

  it('should be created', () => {
    expect(cubeItemService).toBeTruthy();
  });

  it('should store item', () => {
    expect(cubeItemService.set(newItem)).toEqual(true);
  });

  it('should have existing item', () => {
    expect(cubeItemService.get(existingItemKey)).toEqual(existingItem);
  });

  it('should not have item', () => {
    expect(cubeItemService.get(newItemKey)).toEqual(newItem);
  });
});
