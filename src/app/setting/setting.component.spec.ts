import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { SettingService, Settings } from '../setting.service';
import { SettingComponent } from './setting.component';
import { CubeItemService } from '../cube-item.service';

class SettingServiceStub {
  public getSetting(setting: Settings): boolean {
    return false;
  }
}

class CubeItemServiceStub {
  public moveExtractedToNormal():void {
  }
}

describe('SettingComponent', () => {
  let component: SettingComponent;
  let fixture: ComponentFixture<SettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SettingComponent],
      imports: [FormsModule],
      providers: [
        { provide: SettingService, useClass: SettingServiceStub },
        { provide: CubeItemService, useClass: CubeItemServiceStub }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
