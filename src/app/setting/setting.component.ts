import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SettingService, Settings } from '../setting.service';
import { CubeItemService } from '../cube-item.service';


@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.css']
})
export class SettingComponent implements OnInit {

  constructor(private settingService: SettingService, private cubeItemService: CubeItemService) { }

  set hideCubeNormal(value: boolean) {
    this.settingService.setSetting(Settings.HideCubedNormal, value);
  }

  get hideCubeNormal(): boolean {
    return this.settingService.getSetting(Settings.HideCubedNormal);
  }

  set hideCubeSeasonal(value: boolean) {
    this.settingService.setSetting(Settings.HideCubedSeason, value);
  }

  get hideCubeSeasonal(): boolean {
    return this.settingService.getSetting(Settings.HideCubedSeason);
  }

  moveToNormal():void {
    this.cubeItemService.moveExtractedToNormal();
  }

  ngOnInit() {
  }
}
