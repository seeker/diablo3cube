import { TestBed, inject } from '@angular/core/testing';

import { ItemFilterService } from './item-filter.service';

import { SettingService, Settings } from './setting.service';
import { CubeItemService } from './cube-item.service';

import { Item } from './item';
import { CubeItem } from './cube-item';

const seasonCube: Item = new Item('a', 'a');
const normalCube: Item = new Item('b', 'a');

class SettingServiceMock {
  public normal: boolean;
  public season: boolean;

  public getSetting(setting: Settings): boolean {
    switch (setting) {
      case Settings.HideCubedNormal: {
        return this.normal;
      }

      case Settings.HideCubedSeason: {
        return this.season;
      }

      default: {
        throw new Error('Unsupported setting');
      }
    }
  }
}

class CubeItemServiceMock {
  public cube: CubeItem = new CubeItem('');

  public get(name: string): CubeItem {
    return this.cube;
  }
}

describe('ItemFilterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ItemFilterService,
        { provide: SettingService, useClass: SettingServiceMock },
        { provide: CubeItemService, useClass: CubeItemServiceMock }
      ]
    });
  });

  it('should be created', inject([ItemFilterService], (service: ItemFilterService) => {
    expect(service).toBeTruthy();
  }));

  it('should display item', inject([ItemFilterService], (service: ItemFilterService) => {
    expect(service.displayItem(seasonCube)).toEqual(true);
  }));

  it('should not display normal cubed items if normal items are hidden'
    , inject([ItemFilterService, SettingService, CubeItemService],
      (service: ItemFilterService,
        setting: SettingServiceMock,
        cis: CubeItemServiceMock) => {

        cis.cube.extractedNormal = true;
        setting.normal = true;

        expect(service.displayItem(seasonCube)).toEqual(false);
      }));

  it('should display seasonal cubed items if normal items are hidden'
    , inject([ItemFilterService, SettingService, CubeItemService],
      (service: ItemFilterService,
        setting: SettingServiceMock,
        cis: CubeItemServiceMock) => {

        cis.cube.extractedNormal = true;
        setting.season = true;

        expect(service.displayItem(seasonCube)).toEqual(true);
      }));

  it('should not display seasonal cubed items if seasonal items are hidden'
    , inject([ItemFilterService, SettingService, CubeItemService],
      (service: ItemFilterService,
        setting: SettingServiceMock,
        cis: CubeItemServiceMock) => {

        cis.cube.extractedSeason = true;
        setting.season = true;

        expect(service.displayItem(seasonCube)).toEqual(false);
      }));

  it('should display seasonal cubed items if normal items are hidden'
    , inject([ItemFilterService, SettingService, CubeItemService],
      (service: ItemFilterService,
        setting: SettingServiceMock,
        cis: CubeItemServiceMock) => {

        cis.cube.extractedSeason = true;
        setting.normal = true;

        expect(service.displayItem(seasonCube)).toEqual(true);
      }));
});
