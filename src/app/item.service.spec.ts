import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { LocalStorageService } from 'angular-2-local-storage';
import { SettingService } from './setting.service';
import { CubeItemService } from './cube-item.service';
import { ItemService } from './item.service';
import { Item } from './item';

const testData = '{"armor":[{"name":"an", "affix": "aa"}],"jewelry" : [{"name":"jn","affix":"ja"}],"weapons":[{"name":"wn","affix":"wa"}]}';

let service: ItemService;

let itemA: Item;
let itemW: Item;
let itemJ: Item;

describe('ItemService', () => {
  beforeEach(() => {
    const locals = new LocalStorageService({ prefix: 'testPrefix', storageType: 'localStorage' });
    service = new ItemService(new SettingService(locals), new CubeItemService(locals));
    service.setData(JSON.parse(testData));

    itemA = new Item('an', 'aa');
    itemW = new Item('wn', 'wa');
    itemJ = new Item('jn', 'ja');

  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('armors should contain', () => {
    service.getArmors().then((res) => {
      expect(res).toContain(itemA);
    });
  });

  it('jewelry should contain', () => {
    service.getJewelry().then((res) => {
      expect(res).toContain(itemJ);
    });
  });

  it('weapons should contain', () => {
    service.getWeapons().then((res) => {
      expect(res).toContain(itemW);
    });
  });
});
