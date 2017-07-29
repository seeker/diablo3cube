import { async, inject, TestBed } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';

import { ItemService } from './item.service';
import { Item } from './item';

describe('ItemService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemService]
    });
  });

  it('should be created', inject([ItemService], (service: ItemService) => {
    expect(service).toBeTruthy();
  }));

  it('armors should contain', inject([ItemService], (service: ItemService) => {
    service.getArmors().then((res) => {
      expect(res)
      .toContain(new Item("Beckon Sail", "When receiving fatal damage, you instead automatically cast Smoke Screen and are healed to 25% Life. This effect may occur once every 120 seconds."))
    });
  }));

  it('jewelry should contain', inject([ItemService], (service: ItemService) => {
    service.getJewelry().then((res) => {
      expect(res)
      .toContain(new Item("Ancestors' Grace", "When receiving fatal damage, you are instead restored to 100% of maximum Life and resources. This item is destroyed in the process."))
    });
  }));

  it('weapons should contain', inject([ItemService], (service: ItemService) => {
    service.getWeapons().then((res) => {
      expect(res)
      .toContain(new Item("Aether Walker", "Teleport no longer has a cooldown but costs 25 Arcane Power."))
    });
  }));
});
