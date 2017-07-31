import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SettingService, Settings } from '../setting.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private settingService: SettingService) { }

  private set hideCubeNormal(value: boolean) {
    this.settingService.setSetting(Settings.HideCubedNormal, value);
  }

  private get hideCubeNormal(): boolean {
    return this.settingService.getSetting(Settings.HideCubedNormal);
  }

  private set hideCubeSeasonal(value: boolean) {
    this.settingService.setSetting(Settings.HideCubedSeason, value);
  }

  private get hideCubeSeasonal(): boolean {
    return this.settingService.getSetting(Settings.HideCubedSeason);
  }

  ngOnInit() {
  }
}
