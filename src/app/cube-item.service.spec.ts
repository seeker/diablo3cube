import { TestBed, inject } from '@angular/core/testing';

import { CubeItemService } from './cube-item.service';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';

import { CubeItem } from './cube-item';

const testPrefix = 'diablo3cube-test';

const existingItemKey: string = 'existingItem';
const newItemKey: string = 'newItem';
const existingItemSeasonalKey: string = 'existingItemSeasonal';

describe('CubeItemService', () => {


  let cubeItemService: CubeItemService;
  let localStorageService: LocalStorageService;

  let existingItem: CubeItem;
  let existingItemSeasonal: CubeItem;
  let newItem: CubeItem;


  beforeEach(() => {
    this.localStorageService = new LocalStorageService({ prefix: testPrefix, storageType: 'localStorage' });
    this.cubeItemService = new CubeItemService(this.localStorageService);
    this.localStorageService.clearAll('');

    this.existingItem = new CubeItem(existingItemKey);
    this.existingItemSeasonal = new CubeItem(existingItemSeasonalKey);
    this.newItem = new CubeItem(newItemKey);

    this.cubeItemService.setNormal(this.existingItem);
    this.cubeItemService.setSeasonal(this.existingItemSeasonal);
  });

  it('should clear stored test data', () => {
    expect(this.localStorageService.clearAll('')).toEqual(true);
  });

  it('should be created', () => {
    expect(this.cubeItemService).toBeTruthy();
  });

  it('should store normal item', () => {
    expect(this.cubeItemService.setNormal(this.newItem)).toEqual(true);
  });

  it('should have normal existing item', () =>{
    expect(this.cubeItemService.getNormal(existingItemKey)).toEqual(this.existingItem);
  });

  it('should not have normal item', () =>{
    expect(this.cubeItemService.getNormal(newItemKey)).toEqual(undefined);
  });

  it('should store seasonal item', () => {
    expect(this.cubeItemService.setSeasonal(this.newItem)).toEqual(true);
  });

  it('should have seasonal existing item', () =>{
    expect(this.cubeItemService.getSeasonal(existingItemSeasonalKey)).toEqual(this.existingItemSeasonal);
  });

  it('should not have seasonal item', () =>{
    expect(this.cubeItemService.getSeasonal(newItemKey)).toEqual(undefined);
  });
});
