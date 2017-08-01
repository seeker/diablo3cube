import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ItemService } from './item.service';
import { ItemFilterService } from './item-filter.service';
import { Item } from './item';

const testData = '{"armor":[{"name":"an", "affix": "aa"}],"jewelry" : [{"name":"jn","affix":"ja"}],"weapons":[{"name":"wn","affix":"wa"}]}';

let service: ItemService;

let itemA: Item;
let itemW: Item;
let itemJ: Item;

describe('ItemService', () => {
  beforeEach(() => {
    service = new ItemService({ displayItem(item: Item): boolean { return true; } } as ItemFilterService);
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
