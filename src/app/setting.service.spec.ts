import { TestBed, inject } from '@angular/core/testing';
import { LocalStorageModule, LocalStorageService } from 'angular-2-local-storage';

import { SettingService, Settings } from './setting.service';

const testPrefix = 'diablo3cube-test';

/* tslint:disable:prefer-const */
let localStorageService: LocalStorageService;
let service: SettingService;
/* tslint:enable:prefer-const */

describe('SettingService', () => {
  beforeEach(() => {
    this.localStorageService = new LocalStorageService({ prefix: testPrefix, storageType: 'localStorage' });
    this.service = new SettingService(this.localStorageService);
    this.localStorageService.clearAll('');
  });

  it('should set hide normal cubed', () => {
    this.service.setSetting(Settings.HideCubedNormal, true);
      expect(this.service.getSetting(Settings.HideCubedNormal)).toEqual(true);
  });

  it('should set hide seasonal cubed', () => {
    this.service.setSetting(Settings.HideCubedSeason, true);
      expect(this.service.getSetting(Settings.HideCubedSeason)).toEqual(true);
  });

  it('should not hide normal cubed by default', () => {
    expect(this.service.getSetting(Settings.HideCubedNormal)).toEqual(false);
  });

  it('should not hide seasonal cubed by default', () => {
    expect(this.service.getSetting(Settings.HideCubedSeason)).toEqual(false);
  });
});
