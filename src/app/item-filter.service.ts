import { Injectable } from '@angular/core';

import { SettingService, Settings } from './setting.service';
import { CubeItemService } from './cube-item.service';

import { Item } from './item';
import { CubeItem } from './cube-item';

/**
 * Service for filtering items to display.
 */
@Injectable()
export class ItemFilterService {
  constructor(private settingService: SettingService, private cubeItemService: CubeItemService) { }

  private hideNormalCubed(): boolean {
    return this.settingService.getSetting(Settings.HideCubedNormal);
  }

  private hideSeasonalCubed(): boolean {
    return this.settingService.getSetting(Settings.HideCubedSeason);
  }

  /**
   * Query if the given item should be displayed.
   * @param  {Item}    item to query for display state
   * @return {boolean}      if the item should be displayed
   */
  public displayItem(item: Item): boolean {
    let display = true;

    if (this.settingService.getSetting(Settings.HideCubedNormal)) {
      display = display && !this.cubeItemService.get(item.name).extractedNormal;
    }

    if (this.settingService.getSetting(Settings.HideCubedSeason)) {
      display = display && !this.cubeItemService.get(item.name).extractedSeason;
    }

    return display;
  }
}
