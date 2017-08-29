import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { ImportExportComponent } from './import-export.component';
import { ImportExportService } from '../import-export.service';
import { CubeItem } from '../cube-item';
const exportText: string = 'Exported Data Text';

class ImportExportServiceMock {
  public data: string;
  public importData(data: string): void {
    this.data = data;
    console.log('Mock imported data:' + this.data);
  }

  public exportData(data: CubeItem[]): string {
    return undefined;
  }
}

describe('ImportExportComponent', () => {
  let component: ImportExportComponent;
  let fixture: ComponentFixture<ImportExportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ImportExportComponent],
      providers: [{ provide: ImportExportService, useClass: ImportExportServiceMock }]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('should display help text', inject([ImportExportService], (ieService: ImportExportService) => {
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('#importExportText').textContent).toContain(ImportExportComponent.helpText);
  }));

  it('should call import function', inject([ImportExportService], (ieService: ImportExportServiceMock) => {
    spyOn(component, 'importData');
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#importButton').click();

    fixture.whenStable().then(() => {
      expect(component.importData).toHaveBeenCalled();
    });
  }));

  it('should call export function', inject([ImportExportService], (ieService: ImportExportServiceMock) => {
    spyOn(component, 'exportData');
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#exportButton').click();

    fixture.whenStable().then(() => {
      expect(component.exportData).toHaveBeenCalled();
    });
  }));

  //TODO add test for checking actual text, could not change textarea text for test

  it('should call import serice', inject([ImportExportService], (ieService: ImportExportServiceMock) => {
    spyOn(ieService, 'importData');
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#importButton').click();

    fixture.whenStable().then(() => {
      expect(ieService.importData).toHaveBeenCalled();
    });
  }));

  it('should call export serice', inject([ImportExportService], (ieService: ImportExportServiceMock) => {
    spyOn(ieService, 'exportData');
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#importButton').click();

    fixture.whenStable().then(() => {
      expect(ieService.importData).toHaveBeenCalled();
    });
  }));

  it('should import help text', inject([ImportExportService], (ieService: ImportExportServiceMock) => {
    const compiled = fixture.debugElement.nativeElement;

    compiled.querySelector('#importButton').click();

    fixture.whenStable().then(() => {
      expect(ieService.data).toEqual(ImportExportComponent.helpText);
    });
  }));
});
