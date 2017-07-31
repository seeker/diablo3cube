import { Injectable } from '@angular/core';
import { LocalStorageService } from 'angular-2-local-storage';

/**
 * Enums representing valid settings.
 */
export enum Settings {
  HideCubedNormal,
  HideCubedSeason
}

/**
 * Class for accessing settings.
 */
@Injectable()
export class SettingService {
  /**
   * Creates a new SettingService for accessing the applications settings.
   * @param  {LocalStorageService} privatelocalStorageService Service for accessing the browsers localStorage
   * @return {SettingService}                                 A configured instance
   */
  constructor(private localStorageService: LocalStorageService) { }

  /**
   * Enable or disable the given setting.
   * @param {Settings} setting setting to change
   * @param {boolean}  value   value to set for the setting
   */
  public setSetting(setting: Settings, value: boolean): void {
    this.localStorageService.set(Settings[setting], value);
  }

  /**
   * Get the current value for a setting.
   * @param  {Settings} setting to query
   * @return {boolean}          the value set for the setting. If the setting is not found, false is returned.
   */
  public getSetting(setting: Settings): boolean {
    return <boolean>this.localStorageService.get(Settings[setting]) || false;
  }
}
